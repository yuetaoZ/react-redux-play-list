import "./App.css";
import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import Playlist from "./Playlist";
import { loadPlaylistAsyncAction, toggleListenedAsyncAction } from "./actions";

function App() {
  const { playlist, loading } = useSelector((state) => {
    return state.playlistModule;
  });
  const dispatch = useCallback(useDispatch());

  useEffect(() => {
    dispatch(loadPlaylistAsyncAction());
  }, []);

  const toggleListenedAsync = (song) => {
    dispatch(toggleListenedAsyncAction(song));
  };

  return (
    <>
      {loading && <div>loading...</div>}
      <div className="PlaylistContainer">
        <Playlist
          title="All Songs"
          playlist={playlist}
          toggleListened={toggleListenedAsync}
        />
        <Playlist
          title="Listened"
          playlist={playlist.filter((song) => song.listened === true)}
        />
        <Playlist
          title="Favorite"
          playlist={playlist.filter((song) => song.favorite === true)}
        />
      </div>
    </>
  );
}

export default App;
