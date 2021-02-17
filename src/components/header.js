import React from "react"
//Styled Component
import { HeaderNav, Logo, Menu } from "../styles/headerStyle"
import { Container, Flex } from "../styles/globalStyle"
import { Link } from "gatsby"
import { useGlobalStateContext } from "../context/globalContext"

const Header = () => {
  const { currentTheme } = useGlobalStateContext();
  return (
    <HeaderNav>
      <Container>
        {console.log(currentTheme)}
        <Flex spaceBetween noHeight>
          <Logo>
            <Link to={"/"}>
              FURR
            </Link>
            <span></span>
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

