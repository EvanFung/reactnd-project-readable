import * as PostsAPI from "../utils/PostsAPI";

export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";
export function fetchPostsSuccess(posts) {
  return {
    type: FETCH_POSTS_SUCCESS,
    posts
  };
}

export function fetchPostsFailure(error) {
  return {
    type: FETCH_POSTS_FAILURE,
    error
  };
}

export function fetchPosts() {
  return dispatch => {
    PostsAPI.getAll()
      .then(posts => {
        dispatch(fetchPostsSuccess(posts));
      })
      .catch(err => {
        dispatch(fetchPostsFailure(err));
      });
  };
}