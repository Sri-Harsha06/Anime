import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const ResultCard = ({ anime }) => {
  const {
    addMovieToWatchlist,
    addMovieToWatched,
    watchlist,
    watched,
  } = useContext(GlobalContext);
  console.log(watchlist);
  let storedMovie = watchlist.find((o) => o.mal_id === anime.mal_id);
  let storedMovieWatched = watched.find((o) => o.mal_id === anime.mal_id);

  const watchlistDisabled = storedMovie
    ? true
    : storedMovieWatched
    ? true
    : false;

  const watchedDisabled = storedMovieWatched ? true : false;

  return (
    <div className="result-card">
      <div className="poster-wrapper">
        <img src={anime.images.jpg.image_url} alt={`${anime.title} Poster`} />
      </div>

      <div className="info">
        <div className="header">
          <h3 className="title">{anime.title}</h3>
          <h4 className="release-date">{anime.aired.prop.from.year}</h4>
        </div>

        <div className="controls">
          <button
            className="btn"
            disabled={watchlistDisabled}
            onClick={() => addMovieToWatchlist(anime)}
          >
            Add to Watchlist
          </button>

          <button
            className="btn"
            disabled={watchedDisabled}
            onClick={() => addMovieToWatched(anime)}
          >
            Add to Watched
          </button>
        </div>
      </div>
    </div>
  );
};
