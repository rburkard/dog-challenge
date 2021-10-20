import { fork } from 'redux-saga/effects'
import { configureApiSaga } from 'frr-redux/lib/frr/rest.saga'

const ApiSaga = configureApiSaga({
  baseUrl: 'https://dog.ceo/api',
  debug: false,
})

export function* RootSaga() {
  yield fork(ApiSaga)
}
