import {createSelector} from 'reselect';

const selectTv = state => state.tv;

export const selectPopularTvShows = createSelector(
  [selectTv],
  tv => tv.popularTvShows,
);

export const selectIsLoading = createSelector(selectTv, tv => tv.isLoading);

export const selectMoreIsLoading = createSelector(
  selectTv,
  tv => tv.moreIsLoading,
);
