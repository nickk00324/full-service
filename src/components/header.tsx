import React, { useState } from "react"
import styled from "styled-components"
import Link from "gatsby-plugin-transition-link/AniLink"
import { animated as a, useTransition } from "react-spring"
import { Location } from "@reach/router"
import { useDeviceDetect } from "../utils/useDeviceDetect"
import CircularLogo from "../images/fsc_circular_logo.svg"
import HamburgerIcon from "../images/fsc_hamburger.svg"

import PurpleLogo from "../images/wordmark_logos/fsc_wordmark_purple_black.svg"
import GreenLogo from "../images/wordmark_logos/fsc_wordmark_green_black.svg"
import OrangeLogo from "../images/wordmark_logos/fsc_wordmark_orange_black.svg"
import TealLogo from "../images/wordmark_logos/fsc_wordmark_teal_black.svg"
import PinkLogo from "../images/wordmark_logos/fsc_wordmark_pink_black.svg"
import BlueLogo from "../images/wordmark_logos/fsc_wordmark_blue_black.svg"

const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: unset;
  position: -webkit-sticky;
  position: -moz-sticky;
  position: -ms-sticky;
  position: -o-sticky;
  position: sticky;
  top: 0;
  background-color: white;
  padding: 20px 0;
  font-size: 18px;
  z-index: 10000;
  width: 100%;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    margin: 0;
  }
`

const HeadersContainer = styled(a.div)`
  width: 100%;
`

const Header = () => {
  const { isMobile } = useDeviceDetect()

  const transitions = useTransition(true, null, {
    from: {
      transform: "translate(0, -100%)",
    },
    enter: { transform: "translate(0, 0)" },
    leave: { transform: "translate(0, 100%)" },
  })

  return (
    <Location>
      {({ location }) => {
        return (
          <>
            {location.pathname !== "/" && (
              <Container>
                {transitions.map(({ item, props, key }) => (
                  <HeadersContainer key={key} style={props}>
                    {!isMobile ? <DesktopHeader /> : <MobileHeader />}
                  </HeadersContainer>
                ))}
              </Container>
            )}
          </>
        )
      }}
    </Location>
  )
}

const DesktopHeaderContainer = styled.nav`
  width: 100%;
  .Logo {
    width: 120px;
  }
`

const ContentContainer = styled.div`
  max-width: 1280px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 30px;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    padding: 0 20px;
  }

  a:hover {
    transform: scale(1.1);
  }
`

const DesktopHeader = () => {
  return (
    <DesktopHeaderContainer>
      <ContentContainer>
        <div>
          <Link to="/projects">Projects</Link>/
          <Link to="/exhibition">Exhibition</Link>
        </div>
        <Link to="/about">About</Link>
        <Link to="/">
          <img className="Logo" src={CircularLogo} />
        </Link>
        <Link to="/team">Team</Link>
        <Link to="/contact">Contact</Link>
      </ContentContainer>
    </DesktopHeaderContainer>
  )
}

const Links = styled(a.div)`
  display: flex;
  position: fixed;
  flex-direction: column;
  background-color: white;
  text-align: right;
  right: 20px;
  top: 85px;
  width: 200px;

  a {
    padding: 5px 0;
  }
`

const MobileHeaderContainer = styled.nav`
  width: 100%;

  .Logo {
    width: 200px;
  }
`

const MobileHeader = () => {
  const [isShowMenu, setIsShowMenu] = React.useState(false)
  const [currentIndex, setCurrentIndex] = React.useState(0)
  const logos = [
    PurpleLogo,
    GreenLogo,
    OrangeLogo,
    TealLogo,
    PinkLogo,
    BlueLogo,
  ]

  const transitions = useTransition(isShowMenu, null, {
    from: {
      transform: "translate(100%, 0)",
    },
    enter: { transform: "translate(0, 0)" },
    leave: { transform: "translate(100%, 0)" },
  })

  React.useEffect(() => {
    setCurrentIndex(Math.floor(Math.random() * Math.floor(logos.length)))
  }, [])

  return (
    <MobileHeaderContainer>
      <ContentContainer>
        <Link to="/">
          <img className="Logo" src={logos[currentIndex]} />
        </Link>
        <Hamburger onClick={() => setIsShowMenu(!isShowMenu)} />
        {transitions.map(
          ({ item, key, props }) =>
            item && (
              <Links key={key} style={props}>
                <div>
                  <Link to="/projects">Projects</Link>/
                  <Link to="/exhibition">Exhibition</Link>
                </div>
                <Link to="/about">About</Link>
                <Link to="/team">Team</Link>
                <Link to="/contact">Contact</Link>
              </Links>
            )
        )}
      </ContentContainer>
    </MobileHeaderContainer>
  )
}

const HamburgerContainer = styled.div`
  img {
    width: 30px;
  }
`

type HamburgerProps = {
  onClick: () => void
}

const Hamburger = (props: HamburgerProps) => {
  return (
    <HamburgerContainer>
      <img src={HamburgerIcon} onClick={props.onClick} />
    </HamburgerContainer>
  )
}

export default Header
