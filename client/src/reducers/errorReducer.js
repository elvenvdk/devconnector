import * as types from "../actions/types";

const INITIAL_STATE = {};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.payload;
    default:
      return state;
  }
};

export default errorReducer;
