import "./App.css";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Playlist from "./Playlist";
import { loadPlaylistAsyncAction } from "./actions";

function App() {
  const dispatch = useDispatch();
  const { playlist, loading } = useSelector((state) => {
    return state.playlistModule;
  });

  useEffect(() => {
    dispatch(loadPlaylistAsyncAction());
  }, []);

  return (
    <>
      {loading && <div>loading...</div>}
      <div className="PlaylistContainer">
        <Playlist title="All Songs" playlist={playlist} />
        <Playlist title="Listened" playlist={playlist} />
        <Playlist title="Favorite" playlist={playlist} />
      </div>
    </>
  );
}

export default App;
