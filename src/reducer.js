import * as Actions from "./actions";

const initialState = {
  playlist: [],
  favoriteList: [],
  listenedList: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
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
