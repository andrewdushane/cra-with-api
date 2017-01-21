const promiseMiddleware = ({ dispatch, getState }) => next => action => {
  const { promise, ...rest } = action;
  if (!promise) {
    return next(action);
  }
  next({ ...rest, status: 'send-request' });
  return promise.then(
    result => {
      if (result.error) {
        return next({ ...rest, result, error: result.error, status: 'failure' });
      } else {
        return next({ ...rest, result, status: 'success' });
      }
    },
    error => next({ ...rest, error, status: 'failure' })
  );
};

export default promiseMiddleware;
