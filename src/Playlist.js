import "./Playlist.css";
import React from "react";

const Playlist = (props) => {
  return (
    <div className="Playlist">
      <header className="PlaylistHeader">{props.title}</header>
      <ul className="PlaylistUl">
        {props.playlist.map((item, index) => (
          <li className="PlaylistItem" key={item.id}>
            <div>
              {item.artist}
              <br />
              {item.track}
            </div>
            <div>
              {item.listened ? (
                <span
                  className="material-icons HeadphoneGreen"
                  onClick={() => props.toggleListened(item)}
                >
                  headphones
                </span>
              ) : (
                <span
                  className="material-icons HeadphoneGrey"
                  onClick={() => props.toggleListened(item)}
                >
                  headphones
                </span>
              )}
              {item.favorite ? (
                <span
                  className="material-icons FavoriteRed"
                  onClick={() => props.toggleFavorite(item)}
                >
                  favorite
                </span>
              ) : (
                <span
                  className="material-icons FavoriteGrey"
                  onClick={() => props.toggleFavorite(item)}
                >
                  favorite
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Playlist;
