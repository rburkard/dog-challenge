import {
  createEmptyViewAction,
  createViewAction,
} from 'frr-redux/lib/view.helpers'

export enum ViewActionType {
  Initialize = 'view/Initialize',
  SetBreeds = 'view/SET_BREEDS',
  SetP1Dog = 'view/SET_P1DOG',
  SetP2Dog = 'view/SET_P2DOG',
}

export type SetBreeds = {
  type: ViewActionType.SetBreeds
  payload: Array<string>
}

export const setBreeds = createViewAction<SetBreeds>(ViewActionType.SetBreeds)

export type SetP1Dog = {
  type: ViewActionType.SetP1Dog
  payload: string
}

export const setP1Dog = createViewAction<SetP1Dog>(ViewActionType.SetP1Dog)

export type SetP2Dog = {
  type: ViewActionType.SetP2Dog
  payload: string
}

export const setP2Dog = createViewAction<SetP2Dog>(ViewActionType.SetP2Dog)

export type Initialize = {
  type: ViewActionType.Initialize
}

export const initialize = createEmptyViewAction<Initialize>(
  ViewActionType.Initialize,
)
