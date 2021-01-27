import React from "react"
import "../styles/fonts.css"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Main from "../components/main"
import { myContext } from "../../provider"
import Landing from "../components/landing"

const IndexPage = () => {
  return (
    <myContext.Consumer>
      {(context: any) => {
        return (
          <Layout>
            <SEO title="Main" />
            <Landing />
          </Layout>
        )
      }}
    </myContext.Consumer>
  )
}

export default IndexPage
