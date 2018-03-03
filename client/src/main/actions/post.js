import * as PostsAPI from "../utils/PostsAPI";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export function fetchPostSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  };
}

export function fetchPosts() {
  return dispatch => {
    PostsAPI.getAll().then(posts => {
      dispatch(fetchPostSuccess(posts));
    });
  };
}
