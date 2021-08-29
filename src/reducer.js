import * as Actions from "./actions";

const initialState = {
  playlist: [],
  favoriteList: [],
  listenedList: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.LOAD_PLAYLIST_START: {
      return {
        ...state,
        loading: true,
      };
    }
    case Actions.LOAD_PLAYLIST_SUCCESS: {
      return {
        ...state,
        playlist: action.payload,
        loading: false,
      };
    }
    case Actions.LOAD_PLAYLIST_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case Actions.LOAD_PLAYLIST: {
      return {
        ...state,
        playlist: action.payload,
      };
    }
    case Actions.ADD_FAVORITE: {
      const newFavoriteList = [...state.favoriteList, action.payload];
      return {
        ...state,
        favoriteList: newFavoriteList,
      };
    }
    case Actions.ADD_LISTENED: {
      const newListenedList = [...state.listenedList, action.payload];
      return {
        ...state,
        listenedList: newListenedList,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
