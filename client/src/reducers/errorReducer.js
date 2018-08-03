import * as types from "../actions/types";

const INITIAL_STATE = {};

const errorReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.GET_ERRORS:
      return action.payload;
    case types.CLEAR_ERRORS:
      return {};
    default:
      return state;
  }
};

export default errorReducer;
