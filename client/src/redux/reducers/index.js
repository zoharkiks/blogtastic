import { combineReducers } from "redux";
import articleReducer from "./articleReducer";
import categoryReducer from "./categoryReducer";
import {dataReducer} from "./dataReducer";

const reducers = combineReducers({
  allArticles: dataReducer,
  article: articleReducer,
  category: categoryReducer
})

export default reducers;
