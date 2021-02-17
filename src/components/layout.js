import React, { useState } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
//Styled Component

import { createGlobalStyle, ThemeProvider } from "styled-components"
import { normalize } from "styled-normalize"


const GlobalStyle = createGlobalStyle`
  ${normalize}
  * {
    text-decoration: none
    //cursor:none;
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
  }
  const lightTheme = {
    text: "#000",
    background: "#fff",
  }

  return <ThemeProvider theme={darkTheme}>

    <GlobalStyle />
    <main>{children}</main>
  </ThemeProvider>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
