import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import storiesReducer from "./reducers/stories";
import usersReducer from "./reducers/users";
import thunk from "redux-thunk";


let rootReducer = combineReducers({

  stories: storiesReducer,
  users: usersReducer,

});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
