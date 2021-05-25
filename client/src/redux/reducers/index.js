import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import {dataReducer} from "./dataReducer";

const reducers = combineReducers({
  allArticles: dataReducer,
  article: articleReducer
})

export default reducers;
