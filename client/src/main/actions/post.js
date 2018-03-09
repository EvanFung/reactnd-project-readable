import * as PostsAPI from "../utils/PostsAPI";
import { createAsyncAction } from "../utils/ActionHelper";

export const FETCH_POSTS = "FETCH_POSTS";
export const EDIT_POST = "EDIT_POST";
export const UPDATE_POST_SCORE = "UPDATE_POST_SCORE";
export const DELETE_POST = "DELETE_POST";
export const CREATE_POST = "CREATE_POST";

export function fetchPosts() {
  return createAsyncAction(FETCH_POSTS, PostsAPI.getAll());
}

export function updatePostScore({ post, voteType }) {
  return createAsyncAction(UPDATE_POST_SCORE, PostsAPI.vote(post, voteType));
}

export function editPost({ id, title, body }) {
  return createAsyncAction(EDIT_POST, PostsAPI.editPost({ id, title, body }));
}

export function deletePost({ post }) {
  return createAsyncAction(DELETE_POST, PostsAPI.remove(post), { post });
}

export function createPost({ title, body, author, category }) {
  return createAsyncAction(
    CREATE_POST,
    PostsAPI.createPost({ title, body, author, category })
  );
}
