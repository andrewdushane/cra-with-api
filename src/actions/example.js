import { loadMessage as loadMessageRequest } from '../api/example';

export const LOAD_MESSAGE = 'LOAD_MESSAGE';

export const loadMessage = () => dispatch => dispatch({
  type: LOAD_MESSAGE,
  promise: loadMessageRequest(),
});
