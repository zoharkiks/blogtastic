import {ActionTypes} from "../actions/types";
import axios from "axios";

export const setArticles =(articles)=>{
  return{
    type:ActionTypes.SET_ARTICLES,
    payload:articles
  }
}



export const fetchData = () => {
  return (dispatch) => {
       axios
      .get(`http://localhost:1337/articles/`)
      .then((res) => {
        const data = res.data;
console.log(data)
        dispatch(setArticles(data));
      })
      .catch((error) => {
        const errMsg = error.message;
        
      });
  };
};

