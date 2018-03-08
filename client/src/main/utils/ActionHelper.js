export function createAsyncAction(
  actionType,
  ajaxPromise,
  { status = null, response = null, ...data } = {}
) {
  if (status === "success" || status === "error") {
    return {
      type: actionType,
      status,
      response,
      ...data
    };
  }

  return dispatch => {
    return ajaxPromise
      .then(response => {
        let resStatus = response.error ? "error" : "success";
        dispatch(
          createAsyncAction(actionType, ajaxPromise, {
            status: resStatus,
            response,
            ...data
          })
        );
      })
      .catch(response => {
        dispatch(
          createAsyncAction(actionType, ajaxPromise, {
            status: "error",
            response,
            ...data
          })
        );
      });
  };
}
