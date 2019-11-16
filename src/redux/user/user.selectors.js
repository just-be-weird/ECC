import { createSelector } from 'reselect';

const selectUser = (state) => state.user;
//typo in return will prevent rendring
export const selectCurrentUser = createSelector([ selectUser ], (user) => user.currentUser);
