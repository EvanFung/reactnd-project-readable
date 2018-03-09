import * as PostsAPI from "../utils/PostsAPI";
import { createAsyncAction } from "../utils/ActionHelper";
export const SET_ACTIVE_CATEGORY = "SET_ACTIVE_CATEGORY";
export const FETCH_CATEGORIES = "FETCH_CATEGORIES";
export function setActiveCategory(categoryId) {
  return {
    SET_ACTIVE_CATEGORY,
    categoryId
  };
}

export function fetchCategories() {
  return createAsyncAction(FETCH_CATEGORIES, PostsAPI.getCategories());
}
