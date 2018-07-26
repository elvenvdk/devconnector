import axios from "axios";
import * as types from "./types";

// Get current profile
export const getCurrentProfile = () => dispatch => {
  dispatch(setProfileLoading());
  axios
    .get("/api/profile")
    .then(res =>
      dispatch({
        type: types.GET_PROFILE,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: types.GET_PROFILE,
        payload: {}
      })
    );
};

// Profile loading
export const setProfileLoading = () => ({
  type: types.PROFILE_LOADING
});

// Clear profile
export const clearCurrentProfile = () => ({
  type: types.CLEAR_CURRENT_PROFILE
});