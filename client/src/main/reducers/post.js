import { FETCH_POSTS,FETCH_POSTS_SUCCESS } from "../actions/post";

export function posts(state = [], action) {
  let updatedState = state.slice();
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      updatedState = action.posts;
  }
  return updatedState;
}
