import * as PostsAPI from "../utils/PostsAPI";
import { createAsynAction } from "../utils/ActionHelper";

/* Action types */
export const FETCH_COMMENTS_FOR_POST = "FETCH_COMMENTS_FOR_POST";

export function fetchCommentsForPost({ post }) {
  return createAsynAction(
    FETCH_COMMENTS_FOR_POST,
    PostsAPI.getPostComments(post),
    { post }
  );
}
