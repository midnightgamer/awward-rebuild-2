import React, { useEffect, useRef } from "react"
//Styled Component
import { HeaderNav, Logo, Menu } from "../styles/headerStyle"
import { Container, Flex } from "../styles/globalStyle"
import { Link } from "gatsby"

//Context
import { useGlobalStateContext, useGlobalDispatchContext } from "../context/globalContext"
import useElementPosition from "../context/useElementPostion"

const Header = ({ onCursor, setToggleMenu, toggleMenu, hamburgerPosition, setHamburger }) => {
  let hamburger = useRef(null)
  const { currentTheme } = useGlobalStateContext()
  const dispatch = useGlobalDispatchContext()
  const position = useElementPosition(hamburger)
  const toggleTheme = () => {
    if (currentTheme === "dark") {
      dispatch({ type: "TOGGLE_THEME", theme: "light" })
    } else {
      dispatch({ type: "TOGGLE_THEME", theme: "dark" })
    }
  }

  const menuHover = () => {
    onCursor("locked")
    setHamburger({ x: position.x, y: position.y + 72 })
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
            onMouseEnter={() => onCursor("hovered")}
            onMouseLeave={() => onCursor()}
          >
            <Link to={"/"}>
              FURR
            </Link>
            <span
              onClick={toggleTheme}
              onMouseEnter={() => onCursor("pointer")}
              onMouseLeave={() => onCursor()}
            />
            <Link to={"/"}>
              W
            </Link>
          </Logo>
          <Menu ref={hamburger} onClick={() => setToggleMenu(!toggleMenu)} onMouseEnter={menuHover}
                onMouseLeave={onCursor}>
            <button>
              <span />
              <span />
            </button>
          </Menu>
        </Flex>
      </Container>
    </HeaderNav>
  )
}


export default Header

