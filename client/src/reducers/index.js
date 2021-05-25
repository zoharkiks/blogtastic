import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import {dataReducer} from "./dataReducer";
// import articleReducer from "./articleReducer";

const reducers = combineReducers({
  allArticles: dataReducer,
  article: articleReducer
})

export default reducers;
