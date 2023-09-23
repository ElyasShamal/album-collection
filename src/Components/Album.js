import React from "react";
import { starRating } from "../utility";
import Player from "./Player";

function Album({ album }) {
  const showPlayer = false;
  const { title, artist, year, rating, coverUrl, spotifyId } = album;

  return (
    <div className="album">
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>Rating : {starRating(rating)}</p>

      {showPlayer ? (
        <div className="player">
          <Player spotifyId={spotifyId} />
        </div>
      ) : null}

      <img src={coverUrl} alt={`Cover art of album ${title}`} />
    </div>
  );
}

export default Album;
