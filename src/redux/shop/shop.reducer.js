import {UPDATE_COLLECTIONS} from '../actionTypes';

const initialState = {
  collections: null
};
//shopReducer
export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case UPDATE_COLLECTIONS:
      return {
        ...state,
        collections: payload
      };

    default:
      return state;
  }
};
