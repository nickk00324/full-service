import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import StaticPage from "../components/staticPage"
import Exhibition from "../components/exhibition"

const ExhibitionsPage = () => {
  return (
    <Layout>
      <SEO title="Exhibition" />
      <StaticPage title="quarter life">
        <Exhibition />
      </StaticPage>
    </Layout>
  )
}

export default ExhibitionsPage
