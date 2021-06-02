import { ActionTypes } from "../actions/types";
import axios from "axios";

export const selectedCategoryStart = () => {
  return { type: ActionTypes.SELECTED_CATEGORY_START };
};

export const selectedCategory = (category) => {
    return { type: ActionTypes.SELECTED_CATEGORY,payload:category };
  };

  export const removeSelectedCategory = () => {
    return { type: ActionTypes.REMOVE_SELECTED_CATEGORY};
  };

  export const fetchCategory = (slug)=>{
    return(dispatch)=>{
      dispatch(selectedCategoryStart())
      axios
      .get(`http://localhost:1337/categories/${slug}`)
      .then((res) => {
        const data = res.data;
        dispatch(selectedCategory(data));
      })
      .catch((error) => {
       return error
      });
    }
}