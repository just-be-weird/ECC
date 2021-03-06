import {createSelector} from 'reselect';

const selectShop = state => state.shop;

export const selectCollections = createSelector(
  [selectShop],
  shop => shop.collections
);

export const selectCollectionsForPreview = createSelector(
  [selectCollections],
  collections =>
    collections ? Object.keys(collections).map(key => collections[key]) : []
);

export const selectCollection = collectionUrlParam =>
  createSelector(
    [selectCollections],
    collections =>
      collections ? collections[collectionUrlParam] : null
  );
//#Concept: Storing list of elements inside an object instead of an array is called DATA NORMALIZATION
// [{...},{...}...] => {{...},{...}...}

export const selectCollectionFetching = createSelector([selectShop], shop => shop.isFetching);
export const selectIsCollectionsLoaded = createSelector([selectShop], shop => !!shop.collections);
