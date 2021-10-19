import { Endpoints, API, mapEndpointToMethod } from '../spec'
import { configureTypeReduxApiCreator } from 'frr-redux/lib/frr/rest'

const { createEndpoint } = configureTypeReduxApiCreator<
  API,
  Endpoints,
  typeof mapEndpointToMethod
>(mapEndpointToMethod)

export const getDogs = createEndpoint()(
  {
    request: 'GET_DOGS_REQUEST',
    success: 'GET_DOGS_SUCCESS',
    failure: 'GET_DOGS_FAILURE',
  } as const,
  Endpoints.GetDogs,
)
