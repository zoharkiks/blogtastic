import { ActionTypes } from "../actions/types";

const initState = {
    category : [],
    loading :false
}

const categoryReducer = (state = initState, { type, payload }) => {
    switch (type) {
  
      case ActionTypes.SELECTED_CATEGORY_START:
        return{
          ...state,
          loading:true
        }
  
      case ActionTypes.SELECTED_CATEGORY:
        return {
          ...state,
          category:payload,
          loading:false
        };

        case ActionTypes.REMOVE_SELECTED_CATEGORY:
          return{
            ...state
          }
       
  
      default:
        return state;
    }
  };
  
  export default categoryReducer;