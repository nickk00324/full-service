import React, { useState } from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link/AniLink"
import { animated as a, useTransition } from "react-spring"
import { useDeviceDetect } from "../utils/useDeviceDetect"
import CircularLogo from "../images/fsc_circular_logo.svg"

const Container = styled.header`
  display: flex;
  margin-top: 30px;
  justify-content: space-between;
  align-items: center;
`

const Logo = styled.div`
  img {
    width: 150px;
  }
`

const Menu = styled(a.div)`
  display: flex;
  flex-direction: column;
  text-align: left;
  position: absolute;
  top: 72px;
  width: 328px;
  height: 100px;
  a {
    margin: 10px 0;
    width: 75px;

    &:focus {
      outline: none;
    }

    &:hover {
      color: ${props => props.theme.blue};
    }
  }
`

const Header = () => {
  const [isHovering, setIsHovering] = useState(false)
  const { isMobile } = useDeviceDetect()

  const transitions = useTransition(isHovering, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <Container>
      <Link fade to="/projects">
        Projects
      </Link>
      <Link fade to="/about">
        About
      </Link>
      <Logo>
        <Link fade to="/">
          <img src={CircularLogo} />
        </Link>
      </Logo>
      <Link fade to="/team">
        Team
      </Link>
      <Link fade to="/contact">
        Contact
      </Link>
    </Container>
  )
}

export default Header
