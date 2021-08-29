import { combineReducers, createStore, applyMiddleware } from "redux";
import playlistReducer from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
  playlistModule: playlistReducer,
});

const enhancers = composeWithDevTools(applyMiddleware(thunk));

const store = createStore(rootReducer, enhancers);

export default store;
