import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import StaticPage from "../components/staticPage"
import Team from "../components/team"

const TeamPage = () => {
  return (
    <Layout>
      <SEO title="Team" />
      <StaticPage title="Team">
        <Team />
      </StaticPage>
    </Layout>
  )
}

export default TeamPage
