import * as types from "../actions/types";
// import { Types } from "mongoose";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
