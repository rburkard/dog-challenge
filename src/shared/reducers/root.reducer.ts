import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import { viewReducer, ViewState } from './view.reducer'

export type ReduxState = {
  router: any
  view: ViewState
}

export const createRootReducer = (history: any) =>
  combineReducers({
    router: connectRouter(history),
    view: viewReducer,
  })
