import "./App.css";
import React from "react";

const Playlist = (props) => {
  return (
    <div className="Playlist">
      <header className="PlaylistHeader">{props.title}</header>
      <ul>
        {props.playlist.map((item) => (
          <li key={item.id}>
            {item.artist}
            <br />
            {item.track}
            <br />
            <button>Listened: {item.listened ? "true" : "false"}</button>
            <button>Favorite: {item.favorite ? "true" : "false"}</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
