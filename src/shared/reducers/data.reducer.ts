import * as ApiActions from '../actions/api.actions'
import { DogType } from '../types'

export type DataState = {
  dogs: undefined | Record<string, DogType>
}

const initialDataState: DataState = {
  dogs: undefined,
}

type Action = typeof ApiActions.getDogs.action.success

export const dataReducer = (
  state: DataState = initialDataState,
  action: Action,
): DataState => {
  switch (action.type) {
    case ApiActions.getDogs.types.success:
      return {
        ...state,
        dogs: action.payload,
      }
    default:
      return state
  }
}
