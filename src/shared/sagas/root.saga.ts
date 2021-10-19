import { fork, takeEvery, put } from 'redux-saga/effects'
import { configureApiSaga } from 'frr-redux/lib/frr/rest.saga'
import { store } from 'react-notifications-component'
import { ViewActionType } from '../actions/view.actions'

const ApiSaga = configureApiSaga({
  baseUrl: 'https://dog.ceo/api',
  debug: false,
})

export function* RootSaga() {
  yield fork(ApiSaga)

  // yield takeEvery([ViewActionType.Initialize], function* () {
  //   yield put(getTeams.call({}))
  //   yield put(getGames.call({}))

  //   setInterval(function* () {
  //     yield put(getTeams.call({}))
  //   }, 15000)

  //   const initialTeamId = localStorage.getItem("team")

  //   if (initialTeamId) {
  //     yield put(setTeam(initialTeamId))
  //   }
  // })
}
