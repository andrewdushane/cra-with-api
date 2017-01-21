import { LOAD_MESSAGE } from '../actions/example';

const example = (state = {}, { status, type, result}) => {
  if (status === 'success' && type === LOAD_MESSAGE) {
    return {
      ...state,
      message: result.message,
    };
  }
  return state;
}

export default example;
