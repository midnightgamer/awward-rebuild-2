import React, { useEffect } from "react"
//Styled Component
import { HeaderNav, Logo, Menu } from "../styles/headerStyle"
import { Container, Flex } from "../styles/globalStyle"
import { Link } from "gatsby"

//Context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context/globalContext"

const Header = ({onCursor}) => {
  const { currentTheme } = useGlobalStateContext()

  const dispatch = useGlobalDispatchContext()
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  useEffect(() => {
    window.localStorage.setItem("theme", currentTheme)
  }, [currentTheme])

  return (
    <HeaderNav
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: -72, opacity: 0 }}
      transition={{ duration: 1, ease: [.6, .05, -0.01, .9] }}
    >
      <Container>
        <Flex spaceBetween noHeight>
          <Logo
            onMouseEnter={()=> onCursor('hovered')}
            onMouseLeave={()=> onCursor()}
          >
            <Link to={"/"}>
              FURR
            </Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={()=> onCursor('pointer')}
              onMouseLeave={()=> onCursor()}
            />
            <Link to={"/"}>
              W
            </Link>
          </Logo>
          <Menu>
            <button>
              <span></span>
              <span></span>
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}


export default Header

