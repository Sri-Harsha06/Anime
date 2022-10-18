import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {
    e.preventDefault();
    setQuery(e.target.value);
    fetch(`https://api.jikan.moe/v4/anime?q=${e.target.value}`)
      .then((res) => res.json())
      .then((d1) => {
        // if (!d1.errors) {
        setResults(d1.data);
        // } else {
        // setResults([]);
        // }
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a movie"
              value={query}
              onChange={onChange}
            />
          </div>

          {Object.keys(results).length > 0 && (
            <ul className="results">
              {results.map((movie) => (
                <li key={movie.mal_id}>
                  <ResultCard movie={movie} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
