export function clientMiddleware(client) {
  return ({ dispatch, getState }) =>
    (next) =>
    (action) => {
      if (action.api) {
        const [REQUEST, SUCCESS, FAILURE] = action.types;
        dispatch({ type: REQUEST });

        action
          .request(client)
          .then((res) => {
            dispatch({
              type: SUCCESS,
              payload: action.formatRes ? action.formatRes(res) : res,
            });
            // if (action.onSuccess) {
            //   action.onSuccess(res);
            // }
          })
          .catch((err) => {
            if (action.showFailureMessage) {
            }
            dispatch({ type: FAILURE });
          });

        return;
      }

      return next(action);
    };
}
