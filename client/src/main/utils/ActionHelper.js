export function createAsyncAction(
  actionType,
  ajaxPromise,
  { status = null, response = null, ...data } = {}
) {
    if(status === 'success' || status === 'error') {
      return {
        type:actionType,
        status,
        response,
        ...data
      }
    }
}
