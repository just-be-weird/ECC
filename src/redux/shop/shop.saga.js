import { takeEvery } from 'redux-saga/effects';
import { FETCH_COLLECTIONS_START } from '../actionTypes';

export function* fetchCollectionsAsync() {
	yield console.log("I'm fierd");
}

export function* fetchCollectionsStart() {
	yield takeEvery(FETCH_COLLECTIONS_START, fetchCollectionsAsync);
}
