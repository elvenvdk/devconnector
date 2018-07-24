import * as types from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

let newState = {};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default authReducer;
