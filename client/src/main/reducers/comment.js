import {
  FETCH_COMMENTS_FOR_POST,
  POST_NEW_COMMENT,
  UPDATE_COMMENT_SCORE,
  DELETE_COMMENT,
  EDIT_COMMENT
} from "../actions/comment";
import { sortByOjectProperty } from "../utils/Utils";

export function comments(state = [], action) {
  let updatedState = state.slice();
  switch (action.type) {
    case FETCH_COMMENTS_FOR_POST:
      updatedState = action.status === "success" ? action.response : [];
      updatedState = sortByOjectProperty(updatedState, "timestamp");
      break;
    case POST_NEW_COMMENT:
      if (action.status === "success") {
        updatedState.push(action.response);
        updatedState = sortByOjectProperty(updatedState, "timestamp");
      }
      break;
    case UPDATE_COMMENT_SCORE:
      console.log(`Comment ${action.response.id} updated`);
      let commentIndex = updatedState.findIndex(
        item => item.id === action.response.id
      );
      updatedState[commentIndex] = {
        ...action.response
      };
      updatedState = sortByOjectProperty(updatedState, "timestamp");
      break;
    case DELETE_COMMENT:
      console.log(`Comment ${action.response.id} removed`);
      updatedState = updatedState.filter(
        comment => comment.id !== action.response.id
      );
      break;
    case EDIT_COMMENT:
      commentIndex = updatedState.findIndex(
        item => item.id === action.response.id
      );
      updatedState[commentIndex] = {
        ...action.response
      };
      updatedState = sortByOjectProperty(updatedState, "timestamp");
      break;
    default:
      console.debug(`<CommentReducer> Unknown action ${action.type}`);
  }
  return updatedState;
}
