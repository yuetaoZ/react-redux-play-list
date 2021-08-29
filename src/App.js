import "./App.css";
import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Playlist from "./Playlist";
import { loadPlaylistAction } from "./actions";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const playlist = useSelector((state) => {
    return state.playlistModule.playlist;
  });

  useEffect(() => {
    setLoading(true);
    fetch("/playlist")
      .then((resp) => resp.json())
      .then((data) => {
        setLoading(false);
        dispatch(loadPlaylistAction(data));
      });
  }, []);

  return loading ? (
    <div>loading...</div>
  ) : (
    <div className="PlaylistContainer">
      <Playlist title="All Songs" playlist={playlist} />
      <Playlist title="Listened" playlist={playlist} />
      <Playlist title="Favorite" playlist={playlist} />
    </div>
  );
}

export default App;
