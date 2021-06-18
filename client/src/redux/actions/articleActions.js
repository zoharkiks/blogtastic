import { ActionTypes } from "../actions/types";
import axios from "axios";


export const seletcedArticleStart =()=>{
  return{
    type:ActionTypes.SELECTED_ARTICLE_START
  }
}

export const selectedArticle =(article)=>{
    return{
      type:ActionTypes.SELECTED_ARTICLE,
      payload:article
    }
  }

export const removeSelectedArticle = ()=>{
  return{
    type: ActionTypes.REMOVE_SELECTED_ARTICLE
  }
}

  export const fetchArticle = (slug)=>{
      return(dispatch)=>{
        dispatch(seletcedArticleStart())
        axios
        .get(`https://blog-zohar.herokuapp.com/articles/${slug}`)
        .then((res) => {
          const data = res.data;
          dispatch(selectedArticle(data));
        })
        .catch((error) => {
         return error
        });
      }
  }