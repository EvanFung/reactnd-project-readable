import * as PostsAPI from "../utils/PostsAPI";
import { createAsyncAction } from "../utils/ActionHelper";

/* Action types */
export const FETCH_COMMENTS_FOR_POST = "FETCH_COMMENTS_FOR_POST";

export function fetchCommentsForPost({ post }) {
  return createAsyncAction(
    FETCH_COMMENTS_FOR_POST,
    PostsAPI.getPostComments(post),
    { post }
  );
}
