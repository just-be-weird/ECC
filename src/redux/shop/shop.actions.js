import {FETCH_COLLECTIONS_FAILURE, FETCH_COLLECTIONS_START, FETCH_COLLECTIONS_SUCCESS} from '../actionTypes';
import {convertCollectionsSnapshotToMap, firestore} from '../../firebase/firebase.utils';

//All thunks action creator that returns a function that gets a dispatch  | action === JS object
//step1 is create a actionGenerator function which will be returning one
export const fetchCollectionsStart = () => ({
  type: FETCH_COLLECTIONS_START,
});

export const fetchCollectionSuccess = collectionsMap => ({
  type: FETCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
});

export const fetchCollectionsFailure = errorMessage => ({
  type: FETCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
});

//#Concept: Actual function that will be passed to components that will begin the process call it as ActionGenerator Fn
export const fetchCollectionsStartAsync = () => {
  // returns a function, this function gets a dispatch as a first argument
  //In this function we can use dispatch to fire multiples action firing functions
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart());

    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      dispatch(fetchCollectionSuccess(collectionsMap));
    }).catch((error) => dispatch(fetchCollectionsFailure(error.message)));
  }
};
