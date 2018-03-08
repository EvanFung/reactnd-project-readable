import { FETCH_POSTS_SUCCESS, UPDATE_POST_SCORE, EDIT_POST } from "../actions/post";

export function posts(state = [], action) {
  let updatedState = state.slice();
  switch (action.type) {
    case FETCH_POSTS_SUCCESS:
      updatedState = action.posts;
      break;
    case UPDATE_POST_SCORE:
      const postIndex = updatedState.findIndex(post => post.id === action.response.id)
      updatedState[postIndex] = {
        ...updatedState[postIndex],
        voteScore: action.response.voteScore
      }
      break;
    case EDIT_POST:
      console.log(action.response)
    default:
      console.warn(`Unknown action ${action.type}`);
  }
  return updatedState;
}
