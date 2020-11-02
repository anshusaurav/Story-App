import { GET_ALL_STORIES } from "../types";
const initialState = [];

function storiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_STORIES:
      return [...action.payload];
    default:
      return state;
  }
}

export default storiesReducer;
