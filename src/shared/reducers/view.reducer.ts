import { ViewActionType } from '../actions/view.actions'

export type ViewState = {
  breeds: undefined | Array<string>
  p1dog: undefined | string
  p2dog: undefined | string
}

const initialDataState: ViewState = {
  breeds: undefined,
  p1dog: undefined,
  p2dog: undefined,
}

type Action = any

export const viewReducer = (
  state: ViewState = initialDataState,
  action: Action,
): ViewState => {
  switch (action.type) {
    case ViewActionType.SetBreeds:
      return {
        ...state,
        breeds: action.payload,
      }

    case ViewActionType.SetP1Dog:
      return {
        ...state,
        p1dog: action.payload,
      }

    case ViewActionType.SetP2Dog:
      return {
        ...state,
        p2dog: action.payload,
      }
    // case ApiActions.signUp.types.success:
    //   return {
    //     ...state,
    //     teamId: action.payload.team._id,
    //   }
    default:
      return state
  }
}
