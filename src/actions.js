export const LOAD_PLAYLIST = "LOAD_PLAYLIST";
export const ADD_FAVORITE = "ADD_FAVORITE";
export const ADD_LISTENED = "ADD_LISTENED";

export const loadPlaylistAction = (playlist) => {
  return {
    type: LOAD_PLAYLIST,
    payload: playlist,
  };
};

export const addFavoriteActionCreator = (value) => {
  return {
    type: ADD_FAVORITE,
    payload: value,
  };
};

export const addListenedActionCreator = (value) => {
  return {
    type: ADD_LISTENED,
    payload: value,
  };
};
