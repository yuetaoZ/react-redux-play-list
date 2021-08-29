import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Playlist from "./Playlist";
import {
  loadPlaylistAsyncAction,
  toggleListenedAsyncAction,
  toggleFavoriteAsyncAction,
} from "./actions";

function App() {
  const { playlist, loading } = useSelector((state) => {
    return state.playlistModule;
  });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadPlaylistAsyncAction());
  }, []);

  const toggleListenedAsync = (song) => {
    dispatch(toggleListenedAsyncAction(song));
  };

  const toggleFavoriteAsync = (song) => {
    dispatch(toggleFavoriteAsyncAction(song));
  };

  return (
    <>
      {loading && <div>loading...</div>}
      <div className="PlaylistContainer">
        <Playlist
          title="All Songs"
          playlist={playlist}
          toggleListened={toggleListenedAsync}
          toggleFavorite={toggleFavoriteAsync}
        />
        <Playlist
          title="Listened"
          playlist={playlist.filter((song) => song.listened === true)}
          toggleListened={toggleListenedAsync}
          toggleFavorite={toggleFavoriteAsync}
        />
        <Playlist
          title="Favorite"
          playlist={playlist.filter((song) => song.favorite === true)}
          toggleListened={toggleListenedAsync}
          toggleFavorite={toggleFavoriteAsync}
        />
      </div>
    </>
  );
}

export default App;
