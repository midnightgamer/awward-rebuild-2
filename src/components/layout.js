import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"


import Header from "./header"
//Styled Component
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"

//Context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context/globalContext"
import CustomCursor from "./CustomCursor"
import Navigation from "./Navigation"

const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none;
    cursor: none;
  }

  html {
    box-sizing: border-box;
    font-size: 16px;
    -webkit-font-smoothing: antialiased;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxegen, Ubantu, 'Open Sans', sans-serif;
    background: ${props => props.theme.background};
    overscroll-behavior: none;
    overflow-x: hidden;
  }
`


const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
      query SiteTitleQuery {
          site {
              siteMetadata {
                  title
              }
          }
      }
  `)


  const darkTheme = {
    background: "#000",
    text: "#fff",
    red: "#ea291e",
  }
  const lightTheme = {
    text: "#000",
    background: "#fff",
    red: "#ea291e",
  }

  const { currentTheme, cursorStyles } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  const [toggleMenu, setToggleMenu] = useState(false)

  return <ThemeProvider theme={currentTheme === "light" ? lightTheme : darkTheme}>

    <GlobalStyle />
    <CustomCursor toggleMenu={toggleMenu}  />
    <Header onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    <Navigation onCursor={onCursor} toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    <main>{children}</main>
  </ThemeProvider>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
