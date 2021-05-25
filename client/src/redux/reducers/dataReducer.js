import { ActionTypes } from "../actions/types";

const initState = {
  articles: [],
  loading:false
};

export const dataReducer = (state = initState, { type, payload }) => {
  switch (type) {

     case ActionTypes.SET_ARTICLES_START:
      return{
        ...state,
        loading:true
      }

    case ActionTypes.SET_ARTICLES:
      return {
        ...state,
        articles: payload,
        loading:false
      };

    default:
      return state;
  }
};




