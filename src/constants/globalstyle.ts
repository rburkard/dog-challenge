import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    overflow: hidden;
  }

  body {
    margin: 0;
    padding: 0;
    background-color: ${colors.BACKGROUND};
    overflow-y: auto;
    height: 100vh;
  }

  * {
    box-sizing: border-box;
  }

  .Dropdown-control, .Dropdown-menu {
    font-size: 18px;
    font-weight: 300;
    color: black;
  }

`
