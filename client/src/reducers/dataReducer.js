import { ActionTypes } from "../actions/types";

const initState = {
  articles: [],
};

export const dataReducer = (state = initState, { type, payload }) => {
  switch (type) {
    case ActionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: payload,
      };

    default:
      return state;
  }
};




