import { combineReducers, createStore } from "redux";
import playlistReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";

const rootReducer = combineReducers({
  playlistModule: playlistReducer,
});

const enhancers = composeWithDevTools();

const store = createStore(rootReducer, enhancers);

export default store;
