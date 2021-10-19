import { createGlobalStyle } from 'styled-components'
import { colors } from './colors'
import { DESKTOP_STYLE, MOBILE_STYLE } from './responsive'

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

  ul {
    padding: 0px;
    margin: 0px;
    list-style: none;
    padding-left: 16px;
    text-indent: -16px;

    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    font-size: 14.5px;
    line-height: 29px;

    color: ${colors.TEXT};
    margin: 0px;
  }

  li:before { content: "- "; }

  input, textarea {
    border: none;
    -webkit-appearance: none;
    -ms-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background: none;
    text-align: top;
    resize: none;
  }

  input:focus, textarea:focus {
    outline: none;
  }

  h1, h2, h3 {
    font-family: DM Sans;
    font-style: normal;
    font-weight: normal;
    letter-spacing: -0.03em;
    color: ${colors.TEXT};
    margin: 0px;
  }

  h1 {
    text-transform: uppercase;
    ${DESKTOP_STYLE} {
      font-size: 30px;
      line-height: 40px;
    }

    ${MOBILE_STYLE} {
      font-size: 23px;
      line-height: 30px;
    }
  }

  h2 {
    text-transform: uppercase;

    ${DESKTOP_STYLE} {
      font-size: 28px;
      line-height: 36px;
    }

    ${MOBILE_STYLE} {
      font-size: 16px;
      line-height: 19px;
    }
  }

  h3 {
    ${DESKTOP_STYLE} {
      font-size: 26px;
      line-height: 30px;
    }

    ${MOBILE_STYLE} {
      font-size: 23px;
      line-height: 27px;
    }
  }

  h4, p, a, input, textarea {
    font-family: Inter;
    font-style: normal;
    font-weight: normal;
    color: ${colors.TEXT};
    margin: 0px;
    text-decoration: none;
  }

  h4, a {

    ${DESKTOP_STYLE} {
      font-size: 16px;
      line-height: 29px;
    }

    ${MOBILE_STYLE} {
      font-size: 19px;
      line-height: 34px;
    }
  }

  a span {
    transition: 0.3s;
  }
  
  a span:hover {opacity: 0.6}

  p, input, textarea {
    ${DESKTOP_STYLE} {
      font-size: 14.5px;
      line-height: 29px;
    }

    ${MOBILE_STYLE} {
      font-size: 15px;
      line-height: 23px;
    }
  }

  h4 span, p span {
    border-bottom: 1.8px solid white;
    transition: 0.3s;
  }
  h4 span:hover, p span:hover {opacity: 0.6}


`
