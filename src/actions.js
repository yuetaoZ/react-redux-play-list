import axios from "axios";

export const LOAD_PLAYLIST_START = "LOAD_PLAYLIST_START";
export const LOAD_PLAYLIST_FAILED = "LOAD_PLAYLIST_FAILED";
export const LOAD_PLAYLIST_SUCCESS = "LOAD_PLAYLIST_SUCCESS";

export const UPDATE_PLAYLIST_START = "UPDATE_PLAYLIST_START";
export const UPDATE_PLAYLIST_FAILED = "UPDATE_PLAYLIST_FAILED";
export const UPDATE_PLAYLIST_SUCCESS = "UPDATE_PLAYLIST_SUCCESS";

export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const TOGGLE_LISTENED = "TOGGLE_LISTENED";

export const loadingStart = () => {
  return {
    type: LOAD_PLAYLIST_START,
  };
};

export const loadingFailed = () => {
  return {
    type: LOAD_PLAYLIST_FAILED,
  };
};

export const loadPlaylistSuccess = (playlist) => {
  return {
    type: LOAD_PLAYLIST_SUCCESS,
    payload: playlist,
  };
};

export const loadPlaylistAsyncAction = () => {
  return (dispatch) => {
    dispatch(loadingStart());
    axios
      .get("/playlist")
      .then((resp) => {
        dispatch(loadPlaylistSuccess(resp.data));
      })
      .catch(() => {
        dispatch(loadingFailed());
      });
  };
};

export const updatingStart = () => {
  return {
    type: UPDATE_PLAYLIST_START,
  };
};

export const updatingFailed = () => {
  return {
    type: UPDATE_PLAYLIST_FAILED,
  };
};

export const updatePlaylistSuccess = (song) => {
  return {
    type: UPDATE_PLAYLIST_SUCCESS,
    payload: song,
  };
};

export const toggleListenedAsyncAction = (song) => {
  return (dispatch) => {
    const newSong = { ...song, listened: !song.listened };
    dispatch(updatingStart());
    axios
      .put(`/playlist/${song.id}`, newSong)
      .then((resp) => {
        dispatch(updatePlaylistSuccess(resp.data));
      })
      .catch(() => {
        dispatch(updatingFailed());
      });
  };
};

export const toggleFavoriteAsyncAction = (song) => {
  return (dispatch) => {
    const newSong = { ...song, favorite: !song.favorite };
    dispatch(updatingStart());
    axios
      .put(`/playlist/${song.id}`, newSong)
      .then((resp) => {
        dispatch(updatePlaylistSuccess(resp.data));
      })
      .catch(() => {
        dispatch(updatingFailed());
      });
  };
};
