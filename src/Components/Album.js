import React, { useState } from "react";
import { starRating } from "../utility";
import Player from "./Player";

function Album({ album }) {
  const { title, artist, year, rating, coverUrl, spotifyId } = album;

  const [showPlayer, setShowplayer] = useState(false);

  function handleClick() {
    setShowplayer((showPlayer) => !showPlayer);
  }

  function handleClose() {
    setShowplayer(false);
  }

  return (
    <div className="album">
      <h2>{title}</h2>
      <p>{artist}</p>
      <p>{year}</p>
      <p>Rating : {starRating(rating)}</p>

      {showPlayer ? (
        <div className="player">
          <Player spotifyId={spotifyId} />
          <button className="close-btn" onClick={handleClose}>
            Close
          </button>
        </div>
      ) : (
        <img
          src={coverUrl}
          alt={`Cover art of album ${title}`}
          onClick={handleClick}
        />
      )}
    </div>
  );
}

export default Album;
