import { createSelector } from 'reselect'
import { ReduxState } from '../reducers/root.reducer'

// export const getGamesSelector = (state: ReduxState) => state.data.games
// export const getResultsSelector = (state: ReduxState) => state.data.results
// export const getTeamsSelector = (state: ReduxState) => state.data.teams

// export const getTeamIdSelector = (state: ReduxState) => state.view.teamId

// export const getTeamOptionsSelector = createSelector(
//   getTeamsSelector,
//   (teams) =>
//     (teams || []).map((t) => ({
//       label: t.name,
//       value: t._id,
//     })),
// )
