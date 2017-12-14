import { UPDATE_LINK } from './const.js';

const initialState = {
  link: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LINK: {
      return {
          ...state,
          link: action.link,
        };
      };
      default:
        return state;
      }
};

export default reducer;
