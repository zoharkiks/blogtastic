import { ActionTypes } from "../actions/types";

const initialState = {
  article: [],
};

const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SELECTED_ARTICLE:
      return {
        ...state,
        ...payload,
      };

    default:
      return state;
  }
};

export default articleReducer;
