import axios from "axios";
import * as types from "./types";

export const registerUser = userData => dispatch => {
  axios
    .post("/api/users/register", userData)
    .then(res => console.log(res.data))
    .catch(err =>
      dispatch({
        type: types.GET_ERRORS,
        payload: err.response.payload
      })
    );
};
