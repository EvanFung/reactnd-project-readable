import { FETCH_COMMENTS_FOR_POST } from "../actions/comment";
import { sortByObjectProperty } from "../utils/Utils";
export function comments(state = [], action) {
  let updatedState = state.slice();
  switch (action.type) {
    case FETCH_COMMENTS_FOR_POST:
      updatedState = action.status === "success" ? action.response : [];
      updatedState = sortByObjectProperty(updatedState, "timestamp");
      break;
    default:
      console.debug(`<CommentReducer> Unknown action ${action.type}`);
  }
}
