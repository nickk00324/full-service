/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"

import Header from "./header"
import styled, { ThemeProvider } from "styled-components"
import { theme } from "../styles/theme"
import "../styles/global.css"

const LayoutContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 30px;
`

// wraps elements to inject global styles

const Layout = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <LayoutContainer>
        <Header />
        <main>{props.children}</main>
      </LayoutContainer>
    </ThemeProvider>
  )
}

export default Layout
