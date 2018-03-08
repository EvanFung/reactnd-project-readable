import {
  FETCH_POSTS,
  UPDATE_POST_SCORE,
  EDIT_POST,
  DELETE_POST
} from "../actions/post";

export function posts(state = [], action) {
  let updatedState = state.slice();
  let postIndex;
  switch (action.type) {
    case FETCH_POSTS:
      updatedState = action.status === "success" ? action.response : [];
      break;
    case UPDATE_POST_SCORE:
      postIndex = updatedState.findIndex(
        post => post.id === action.response.id
      );
      updatedState[postIndex] = {
        ...updatedState[postIndex],
        voteScore: action.response.voteScore
      };
      break;
    case EDIT_POST:
      postIndex = updatedState.findIndex(
        post => post.id === action.response.id
      );
      updatedState[postIndex] = {
        ...updatedState[postIndex],
        ...action.response
      };
      break;
    case DELETE_POST:
      postIndex = updatedState.findIndex(
        post => post.id === action.response.id
      );
      updatedState.splice(postIndex, 1);
      break;
    default:
      console.warn(`Unknown action ${action.type}`);
  }
  return updatedState;
}
