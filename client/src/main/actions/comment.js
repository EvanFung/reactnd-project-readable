import * as PostsAPI from "../utils/PostsAPI";
import { createAsyncAction } from "../utils/ActionHelper";

/* Action types */
export const FETCH_COMMENTS_FOR_POST = "FETCH_COMMENTS_FOR_POST";
export const UPDATE_COMMENT_SCORE = "UPDATE_COMMENT_SCORE";
export function fetchCommentsForPost({ post }) {
  return createAsyncAction(
    FETCH_COMMENTS_FOR_POST,
    PostsAPI.getPostComments(post),
    { post }
  );
}

export function postNewComment() {}

export function updateCommentScore({ comment, voteType }) {
  return createAsyncAction(
    UPDATE_COMMENT_SCORE,
    PostsAPI.updateCommentScore(comment, voteType)
  );
}
