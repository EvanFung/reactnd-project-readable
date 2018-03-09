import {
  FETCH_POSTS,
  UPDATE_POST_SCORE,
  EDIT_POST,
  DELETE_POST,
  CREATE_POST,
  SORT_POST_LIST
} from "../actions/post";
import { sortByOjectProperty } from "../utils/Utils";
export function posts(state = [], action) {
  let updatedState = state.slice();
  let postIndex;
  switch (action.type) {
    case FETCH_POSTS:
      updatedState = action.status === "success" ? action.response : [];
      sortByOjectProperty(updatedState, "timestamp");
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
    case CREATE_POST:
      console.log(`create post with id ${action.response.id}`);
      action.status === "success"
        ? updatedState.push(action.response)
        : console.log(`can't create a post`);
      break;
    case SORT_POST_LIST:
      sortByOjectProperty(updatedState, action.criteria);
      break;
    default:
      console.warn(`Unknown action ${action.type}`);
  }
  return updatedState;
}
