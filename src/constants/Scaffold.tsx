import React, { ReactNode } from 'react'
import { GlobalStyle } from './globalstyle'
import styled from 'styled-components'
import ReactNotification from 'react-notifications-component'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  height: 100%;
  flex-direction: column;
  background: rgb(255, 255, 255);
  background: linear-gradient(
    138deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(186, 99, 189, 0.577468487394958) 50%,
    rgba(251, 247, 247, 1) 100%
  );
`

export const Scaffold = (props: { children?: ReactNode }) => {
  return (
    <Wrapper>
      <GlobalStyle />
      <ReactNotification />
      {props.children}
    </Wrapper>
  )
}
