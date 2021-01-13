import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import StaticPage from "../components/staticPage"
import About from "../components/about"

const AboutPage = () => {
  return (
    <Layout>
      <SEO title="About" />
      <StaticPage title="About">
        <About />
      </StaticPage>
    </Layout>
  )
}

export default AboutPage
