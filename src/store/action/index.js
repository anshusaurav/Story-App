import {

  GET_ALL_USERS,
  GET_ALL_STORIES,

} from "../types";


import axios from "axios";

axios.defaults.baseURL = "https://reflective-plant-rayon.glitch.me";
axios.defaults.headers.get["Content-Type"] = `application/json`;



export function getUsers() {
  return function (dispatch) {
    axios
      .get("/users")
      .then(({ data: { users } }) => {
        return dispatch({
          type: GET_ALL_USERS,
          payload: [...users],
        });
      });
  };
}

export function getStories() {
  return function (dispatch) {
    axios
      .get("/stories")
      .then(({ data: { stories } }) => {
        return dispatch({
          type: GET_ALL_STORIES,
          payload: [...stories],
        });
      });
  };
}


