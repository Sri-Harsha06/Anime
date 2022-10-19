import React, { useEffect, useState } from "react";
import { MovieCard2 } from "./MovieCard2";
const Top = () => {
  const [results, setResults] = useState([]);
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/top/anime`)
      .then((res) => res.json())
      .then((d) => {
        setResults(d.data);
      });
  }, []);
  return (
    <div className="anime-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Top animes</h1>
        </div>
        <div className="anime-grid">
          {results.slice(0, 6).map((anime) => (
            <MovieCard2 anime={anime} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Top;
