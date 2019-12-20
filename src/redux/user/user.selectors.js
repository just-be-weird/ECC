import { createSelector } from 'reselect';

const selectUser = (state) => state.user;
//typo in return will prevent rendring  || first argument can be , seperated array or simply , seperated values
export const selectCurrentUser = createSelector([ selectUser ], (user) => user.currentUser);
