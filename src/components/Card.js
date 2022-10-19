import React from "react";
import { Controls } from "./Controls";

export const Card = ({ anime, type }) => {
  return (
    <div className="anime-card">
      <div className="overlay"></div>
      <img src={anime.images.jpg.image_url} alt={`${anime.title} Poster`} />
      <Controls type={type} anime={anime} />
    </div>
  );
};
