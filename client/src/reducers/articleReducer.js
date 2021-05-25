import { ActionTypes } from "../actions/types";

const initialState = {
  article: [],
  loading:false
};

const articleReducer = (state = initialState, { type, payload }) => {
  switch (type) {

    case ActionTypes.SELECTED_ARTICLE_START:
      return{
        ...state,
        loading:true
      }

    case ActionTypes.SELECTED_ARTICLE:
      return {
        ...state,
        ...payload,
        loading:false
      };
      case ActionTypes.REMOVE_SELECTED_ARTICLE:
        return{
          ...state,
          // article:[]
        }

    default:
      return state;
  }
};

export default articleReducer;
