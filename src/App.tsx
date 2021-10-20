import React from 'react'
import styled from 'styled-components'
import { Wrapper } from './constants/components'
import { setBreeds, setP1Dog, setP2Dog } from './shared/actions/view.actions'
import Dropdown from 'react-dropdown'
// import { getDogs } from './shared/actions/api.actions'
import { DogType } from './shared/types'
import coffin from './constants/coffin.png'
import { useDispatch, useSelector } from 'react-redux'
import {
  getBreedsSelector,
  getP1DogSelector,
  getP2DogSelector,
} from './shared/selectors/selectors'

import ReactNotification from 'react-notifications-component'
import { store } from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
// import { history, store } from './shared/store/store'
import { colors } from './constants/colors'
import { Scaffold } from './constants/Scaffold'

const UpperContainer = styled.div`
  display: flex;
`

const LowerContainer = styled.div`
  display: flex;
`

const FightPlatform = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 120px;
  width: 240px;
  border-radius: 50%;
  margin: 60px;
  position: relative;

  background: ${colors.PLATFORMOUTER};
`

const FightPlatformInner = styled.div`
  display: flex;
  height: 90px;
  width: 200px;
  border-radius: 50%;
  position: relative;

  background: ${colors.PLATFORM};
`

const FightStatsContainer = styled.div`
  align-items: center;
  flex-direction: column;
  justify-content: center;
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
`

const EntryForm = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 40px;
  height: 120px;
  border-radius: 5%;
  border: 2px solid black;
  background: #5ff29f;
`

export const Button = styled.button`
  background-color: #5ff29f;
  display: flex;
  flex: 0 0 40px;
  height: 120px;
  justify-content: center;
  color: black;
  padding: 8px;
  border-radius: 3px;
  cursor: pointer;
  &:disabled {
    opacity: 0.3;
  }
`

export function App() {
  const dispatch = useDispatch()

  let breeds = useSelector(getBreedsSelector)

  const [p1Image, setP1Image] = React.useState<string>()
  const [p2Image, setP2Image] = React.useState<string>()
  const [dog1Power, setDog1Power] = React.useState<number>(0)
  const [dog2Power, setDog2Power] = React.useState<number>(0)
  const [winnerDog, setWinnerDog] = React.useState<number>(0)

  const getP1Image = async (val: string) => {
    dispatch(setP1Dog(val))
    try {
      const x = await fetch(`https://dog.ceo/api/breed/${val}/images`, {
        method: 'GET',
      })
      const json = (await x.json()) as Record<string, string>

      setP1Image(json.message[0])
    } catch (error) {
      console.log(error)
    }
  }

  const getP2Image = async (val: String) => {
    try {
      const x = await fetch(`https://dog.ceo/api/breed/${val}/images`, {
        method: 'GET',
      })
      const json = (await x.json()) as Record<string, string>

      setP2Image(json.message[0])
    } catch (error) {
      console.log(error)
    }
  }

  const getDogs = async () => {
    try {
      const x = await fetch('https://dog.ceo/api/breeds/list/all', {
        method: 'GET',
      })
      const json = (await x.json()) as Record<string, DogType>

      const cleaned = Object.keys(json.message)

      dispatch(setBreeds(cleaned))
    } catch (error) {
      console.log(error)
    }
  }

  // const getRandomDog = (): string => {
  //   if (breeds !== undefined) {
  //     return breeds[Math.floor(Math.random() * breeds.length)]
  //   }
  //   return 'dane'
  // }

  const handleButtonClick = () => {
    if (breeds !== undefined) {
      const randy = breeds[Math.floor(Math.random() * breeds.length)]
      dispatch(setP2Dog(randy))
      getP2Image(randy)
      setDog2Power(getPower())
    }
  }

  const handleFightButton = () => {
    if (dog1Power !== undefined && dog2Power !== undefined) {
      if (dog2Power <= dog1Power) {
        setWinnerDog(1)
        setP2Image(coffin)
        setP2Dog('')
        setDog2Power(0)
      } else {
        setWinnerDog(2)
        setP1Image(coffin)
        setP1Dog('')
        setDog1Power(0)
      }
    }
  }

  const getPower = (): number => {
    return Math.floor(Math.random() * 9999)
  }

  React.useEffect(() => {
    getDogs()
  }, [])

  if (breeds === undefined) {
    return <Wrapper>Loading..</Wrapper>
  }

  return (
    <Scaffold>
      <UpperContainer>
        <FightStatsContainer>
          <h4>Power: {dog2Power}</h4>
          <Button onClick={handleButtonClick}>Get Opponent</Button>
        </FightStatsContainer>
        <FightPlatform>
          <FightPlatformInner>
            <DogContainer>
              <img
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: 10,
                }}
                src={p2Image}
                alt=""
              />
            </DogContainer>
          </FightPlatformInner>
        </FightPlatform>
      </UpperContainer>
      <Button disabled={!dog1Power || !dog2Power} onClick={handleFightButton}>
        FIGHT!
      </Button>
      <LowerContainer>
        <FightPlatform>
          <FightPlatformInner>
            <DogContainer>
              <img
                style={{
                  width: '100%',
                  objectFit: 'cover',
                  borderRadius: 10,
                }}
                src={p1Image}
                alt=""
              />
            </DogContainer>
          </FightPlatformInner>
        </FightPlatform>
        <FightStatsContainer>
          <h4>Power: {dog1Power}</h4>
          <EntryForm>
            <Dropdown
              options={breeds}
              onChange={(v) => {
                getP1Image(v.value)
                setDog1Power(getPower())
              }}
              placeholder="Select fighter"
            />
          </EntryForm>
        </FightStatsContainer>
      </LowerContainer>
    </Scaffold>
  )
}
