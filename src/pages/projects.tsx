import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import SEO from "../components/seo"
import StaticPage from "../components/staticPage"
import Works from "../components/works"

const StyledContact = styled.div`
  height: 100vh;
`

const ProjectsPage = () => {
  return (
    <Layout>
      <SEO title="Projects" />
      <StaticPage title="Projects">
        <Works />
      </StaticPage>
    </Layout>
  )
}

export default ProjectsPage
