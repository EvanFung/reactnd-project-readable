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
  return createAsyncAction(FETCH_POSTS, PostsAPI.getAll());
}

export function updatePostScore({ post, voteType }) {
  return createAsyncAction(UPDATE_POST_SCORE, PostsAPI.vote(post, voteType));
}

export function editPost({ id, title, body }) {
  return createAsyncAction(EDIT_POST, PostsAPI.editPost({ id, title, body }));
}
