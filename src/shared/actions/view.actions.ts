import {
  createEmptyViewAction,
  createViewAction,
} from 'frr-redux/lib/view.helpers'

export enum ViewActionType {
  Initialize = 'view/Initialize',
  SetTeam = 'view/SET_TEAM',
}

export type Initialize = {
  type: ViewActionType.Initialize
}

export const initialize = createEmptyViewAction<Initialize>(
  ViewActionType.Initialize,
)
