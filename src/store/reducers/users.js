import { GET_ALL_USERS } from "../types";
const initialState = [];

function usersReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ALL_USERS:
      return [...action.payload];
    default:
      return state;
  }
}

export default usersReducer;
