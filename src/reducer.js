import * as Actions from "./actions";

const initialState = {
  playlist: [],
  loading: false,
  updating: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_PLAYLIST_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.LOAD_PLAYLIST_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.LOAD_PLAYLIST_SUCCESS: {
      return {
        ...state,
        playlist: action.payload,
        loading: false,
      };
    }
    case Actions.UPDATE_PLAYLIST_START: {
      return {
        ...state,
        updating: true,
      };
    }
    case Actions.UPDATE_PLAYLIST_FAILED: {
      return {
        ...state,
        updating: false,
      };
    }
    case Actions.UPDATE_PLAYLIST_SUCCESS: {
      const newPlaylist = state.playlist.map((song) => {
        if (song.id === action.payload.id) {
          return action.payload;
        } else {
          return song;
        }
      });
      return {
        ...state,
        playlist: newPlaylist,
        updating: false,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
