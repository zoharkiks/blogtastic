import { ActionTypes } from "../actions/types";
import axios from "axios";

export const selectedArticle =(article)=>{
    return{
      type:ActionTypes.SELECTED_ARTICLE,
      payload:article
    }
  }

  export const fetchArticle = (id)=>{
      return(dispatch)=>{
        axios
        .get(`http://localhost:1337/articles/${id}`)
        .then((res) => {
          const data = res.data;
          dispatch(selectedArticle(data));
        })
        .catch((error) => {
          const errMsg = error.message;
          
        });
      }
  }