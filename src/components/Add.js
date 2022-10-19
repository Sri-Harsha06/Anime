import React, { useState } from "react";
import { ResultCard } from "./ResultCard";

export const Add = () => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState([]);

  const onChange = (e) => {

    setSearch(e.target.value);

    fetch(`https://api.jikan.moe/v4/anime?q=${e.target.value}`)
      .then((res) => res.json())
      .then((d) => {
        setResults(d.data);
      });
  };

  return (
    <div className="add-page">
      <div className="container">
        <div className="add-content">
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search for a anime"
              value={search}
              onChange={onChange}
            />
          </div>

          {results.length > 0 && (
            <ul className="results">
              {results.map((anime) => (
                <li key={anime.mal_id}>
                  <ResultCard anime={anime} />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};
