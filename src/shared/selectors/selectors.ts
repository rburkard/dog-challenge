import { ReduxState } from '../reducers/root.reducer'

export const getBreedsSelector = (state: ReduxState) => state.view.breeds

export const getP1DogSelector = (state: ReduxState) => state.view.p1dog

export const getP2DogSelector = (state: ReduxState) => state.view.p2dog
