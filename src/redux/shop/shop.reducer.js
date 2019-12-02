import {FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS} from '../actionTypes';

const initialState = {
  collections: null,
  isFetching: false,//as we are writing the data fetch logic inside the reducer our reducer should aware of progress
  errorMessage: undefined
};
//shopReducer
export default (state = initialState, action) => {
  const {type, payload} = action;
  switch (type) {
    case FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      };

    case FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: payload
      };

    case FETCH_COLLECTIONS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: payload
      };

    default:
      return state;
  }
};
