import isEmpty from "../validations/is-empty";
import * as types from "../actions/types";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: {}
};

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload
      };
    default:
      return state;
  }
};

export default authReducer;
