import {
  GetRequest,
  RestMethod,
  PostRequest,
} from 'frr-redux/lib/frr/api.types'

import { DogType } from './types'

export enum Endpoints {
  GetDogs = '/breeds/list/all',
}

export type API = {
  [Endpoints.GetDogs]: GetRequest<{
    response: Record<string, DogType>
  }>
}

export const mapEndpointToMethod: {
  [k in Endpoints]: API[k]['method']
} = {
  [Endpoints.GetDogs]: RestMethod.GET,
}
