import React from 'react'
import styled from 'styled-components'
import { Wrapper } from './constants/components'
import { initialize } from './shared/actions/view.actions'
import { getDogs } from './shared/actions/api.actions'
import { useDispatch } from 'react-redux'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { history, store } from './shared/store/store'

const UpperContainer = styled.div`
  display: flex;
`

const LowerContainer = styled.div`
  display: flex;
`

const FightPlatform = styled.div`
  display: flex;
  height: 100px;
  width: 200px;
  border-radius: 50%;
  margin: 60px;
  position: relative;

  background: red;
`

const FightStatsContainer = styled.div`
  display: flex;
  height: 100px;
  width: 200px;
  border-radius: 10%;
  margin: 60px;

  background: blue;
`

const DogContainer = styled.div`
  display: flex;
  height: 120px;
  width: 100px;
  border-radius: 10%;
  position: absolute;
  bottom: 20%;
  left: 25%;

  background: green;
`

export function App() {
  const dispatch = useDispatch()

  React.useEffect(() => {
    dispatch(getDogs.call({}))
  }, [])

  return (
    <Wrapper>
      <UpperContainer>
        <FightStatsContainer></FightStatsContainer>
        <FightPlatform>
          <DogContainer></DogContainer>
        </FightPlatform>
      </UpperContainer>
      <LowerContainer>
        <FightPlatform>
          <DogContainer></DogContainer>
        </FightPlatform>
        <FightStatsContainer></FightStatsContainer>
      </LowerContainer>
    </Wrapper>
  )
}
