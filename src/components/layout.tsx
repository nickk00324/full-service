/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import { Location } from "@reach/router"
import { theme } from "../styles/theme"
import "../styles/global.css"
import Footer from "./Footer"
import pinkLines from "../images/pink_lines.svg"
import orangeLines from "../images/orange_lines.svg"
import tealLines from "../images/teal_lines.svg"
import blueLines from "../images/blue_lines.svg"

const ContainerContainer = styled.div`
  .Layout__lines {
    position: fixed;
    top: 600px;
    z-index: -1000000;
  }
`

const LayoutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 30px 30px;

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    padding: 10px;
  }
`

// wraps elements to inject global styles

const Layout = (props: any) => {
  const lines = [pinkLines, tealLines, orangeLines, blueLines]
  const [lineNumber, setLineNumber] = React.useState(0)

  React.useEffect(() => {
    setLineNumber(Math.floor(Math.random() * Math.floor(lines.length)))
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Location>
        {({ location }) => (
          <ContainerContainer>
            <Header />
            <LayoutContainer>
              <main>{props.children}</main>
            </LayoutContainer>
            <img className="Layout__lines" src={lines[lineNumber]} />
            <Footer isLanding={location.pathname === "/"} />
          </ContainerContainer>
        )}
      </Location>
    </ThemeProvider>
  )
}

export default Layout
