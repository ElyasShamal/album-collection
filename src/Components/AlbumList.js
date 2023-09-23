import React from "react";
import Album from "./Album";
import { v4 as uuidv4 } from "uuid";

function AlbumList({ albums }) {
  const albumList = albums.map((album) => (
    <Album key={uuidv4()} album={album} />
  ));
  return (
    <>
      <h1 className="title">Album Collection</h1>
      <div className="albums">{albumList}</div>
    </>
  );
}

export default AlbumList;
