import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Card } from "./Card";

export const Watchlist = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div className="anime-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">My Watchlist</h1>

          <span className="count-pill">
            {watchlist.length} {watchlist.length === 1 ? "anime" : "animes"}
          </span>
        </div>

        {watchlist.length > 0 ? (
          <div className="anime-grid">
            {watchlist.map((anime) => (
              <Card anime={anime} key={anime.mal_id} type="watchlist" />
            ))}
          </div>
        ) : (
          <h2 className="no-animes">No animes in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};
