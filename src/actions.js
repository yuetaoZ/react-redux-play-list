import axios from "axios";

export const LOAD_PLAYLIST = "LOAD_PLAYLIST";
export const LOAD_LISTENED = "LOAD_LISTENED";
export const LOAD_FAVORITE = "LOAD_FAVORITE ";

export const ADD_FAVORITE = "ADD_FAVORITE";
export const ADD_LISTENED = "ADD_LISTENED";

export const LOAD_PLAYLIST_START = "LOAD_PLAYLIST_START";
export const LOAD_PLAYLIST_SUCCESS = "LOAD_PLAYLIST_SUCCESS";
export const LOAD_PLAYLIST_FAILED = "LOAD_PLAYLIST_FAILED";

export const loadPlaylistAction = (playlist) => {
  return {
    type: LOAD_PLAYLIST,
    payload: playlist,
  };
};

export const loadListenedlistAction = (playlist) => {
  const listenedList = playlist.filter((song) => song.listened === true);
  return {
    type: LOAD_LISTENED,
    payload: listenedList,
  };
};

export const loadFavoritelistAction = (playlist) => {
  const favoriteList = playlist.filter((song) => song.favorite === true);
  return {
    type: LOAD_FAVORITE,
    payload: favoriteList,
  };
};

export const addFavoriteAction = (value) => {
  return {
    type: ADD_FAVORITE,
    payload: value,
  };
};

export const addListenedAction = (value) => {
  return {
    type: ADD_LISTENED,
    payload: value,
  };
};

export const loadPlaylistStart = () => {
  return {
    type: LOAD_PLAYLIST_START,
  };
};

export const loadPlaylistSuccess = (playlist) => {
  return {
    type: LOAD_PLAYLIST_SUCCESS,
    payload: playlist,
  };
};

export const loadPlaylistFailed = () => {
  return {
    type: LOAD_PLAYLIST_FAILED,
  };
};

export const loadPlaylistAsyncAction = () => {
  return (dispatch) => {
    dispatch(loadPlaylistStart());
    axios
      .get("/playlist")
      .then((resp) => {
        dispatch(loadPlaylistSuccess(resp.data));
        dispatch(loadListenedlistAction(resp.data));
        dispatch(loadFavoritelistAction(resp.data));
      })
      .catch(() => {
        dispatch(loadPlaylistFailed());
      });
  };
};
