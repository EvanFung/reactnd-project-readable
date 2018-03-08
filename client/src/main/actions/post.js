import * as PostsAPI from "../utils/PostsAPI";

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

export function editPost({ status = null, response = null, post }) {
  //if we fetched the data, return an action
  if (status === "success" || status === "error") {
    return {
      type: EDIT_POST,
      status,
      response
    };
  }
  return dispatch => {
    PostsAPI.editPost(post)
      .then(res => {
        console.log(`${res} got you!`);
        dispatch(editPost({ status: "success", response: res }));
      })
      .catch(error => {
        //if an error occurred, dispatch an action.
        dispatch(editPost({ status: "error", response: error }));
      });
  };
}
