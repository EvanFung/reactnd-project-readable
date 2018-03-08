import * as PostsAPI from "../utils/PostsAPI";
import { createAsyncAction } from "../utils/ActionHelper";
export const FETCH_POSTS = "FETCH_POSTS";
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const EDIT_POST = "EDIT_POST";
export const UPDATE_POST_SCORE = "UPDATE_POST_SCORE";
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
  return createAsyncAction(FETCH_POSTS,PostsAPI.getAll())
}

export function updatePostScore({
  status = null,
  response = null,
  post,
  voteType
}) {
  //if we fetched the data, return an action
  if (status === "success" || status === "error") {
    return {
      type: UPDATE_POST_SCORE,
      status,
      response,
      voteType
    };
  }

  //else using promise to fetch the data
  return dispatch => {
    PostsAPI.vote(post, voteType)
      .then(post => {
        console.log(`${post.id} has an score of ${post.voteScore}`);
        //if successfully get the data, dispatch an action.
        dispatch(updatePostScore({ status: "success", response: post }));
      })
      .catch(error => {
        //if an error occurred, dispatch an action.
        dispatch(updatePostScore({ status: "error", response: error }));
      });
  };
}

export function editPost({ id, title, body }) {
  return createAsyncAction(EDIT_POST, PostsAPI.editPost({ id, title, body }));
}
