import { combineReducers } from "redux";
import { posts } from "./post";
import { activeCategory,categories } from './category'

export default combineReducers({
  posts,
  activeCategory,
  categories
});
