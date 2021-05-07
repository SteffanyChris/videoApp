import { createSelector } from 'reselect';

const selectAssets = state => state.assetsByGenres

export const selectAssetsByGenres = createSelector(
	[selectAssets],
	asset => asset.assetsByGenre
)

export const selectGenreIsLoading = createSelector(
	selectAssets,
	assets => assets.isLoading
)