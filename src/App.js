import "./App.css";
import React, { useState, useEffect } from "react";
import Playlist from "./Playlist";

function App() {
  const [playlist, setPlaylist] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("/playlist")
      .then((resp) => resp.json())
      .then((data) => setPlaylist(data));
    setLoading(false);
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
