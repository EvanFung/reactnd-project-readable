import { SET_ACTIVE_CATEGORY, FETCH_CATEGORIES } from "../actions/category";

export function activeCategory(state = null, action) {
  switch (action.type) {
    case SET_ACTIVE_CATEGORY:
      return action.categoryId || null;
    default:
      return state;
  }
}

export function categories(state = [], action) {
  switch (action.type) {
    case FETCH_CATEGORIES:
      return action.status === "success" ? action.response.categories : [];
    default:
      return state;
  }
}
