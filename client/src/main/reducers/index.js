import { combineReducers } from "redux";
import { posts,activePost } from "./post";
import { activeCategory, categories } from "./category";
import {comments} from './comment'
export default combineReducers({
  posts,
  categories,
  activeCategory,
  activePost,
  comments
});
