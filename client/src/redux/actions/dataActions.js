import {ActionTypes} from "../actions/types";
import axios from "axios";

export const setArticlesStart=()=>{
  return{
    type:ActionTypes.SET_ARTICLES_START
  }
}
export const setArticles =(articles)=>{
  return{
    type:ActionTypes.SET_ARTICLES,
    payload:articles
  }
}




export const fetchData = () => {
  return (dispatch) => {
    dispatch(setArticlesStart())
       axios
      .get(`http://localhost:1337/articles?_sort=updatedAt:DESC`)
      .then((res) => {
        const data = res.data;
        dispatch(setArticles(data));
      })
      .catch((error) => {
        return error
        
      });
  };
};

