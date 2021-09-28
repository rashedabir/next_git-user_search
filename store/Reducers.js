import { ACTIONS } from "./Action";

const reducers = (state, action) => {
  switch (action.type) {
    case ACTIONS.USER:
      return {
        ...state,
        user: action.payload,
      };

    case ACTIONS.REPOS:
      return {
        ...state,
        repos: action.payload,
      };

    default:
      return state;
  }
};

export default reducers;
