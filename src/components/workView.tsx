import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { useTransition, animated as a } from "react-spring"
import Layout from "./layout"
import SEO from "./seo"
import { useDeviceDetect } from "../utils/useDeviceDetect"
import Carousel from "./carousel"
import ReactMarkdown from "react-markdown"

// template page generated automatically for each work

type WorkViewProps = {
  data: any
}

const Container = styled.div`
  h1 {
    font-size: 96px;
    font-weight: 400;
  }

  h2 {
    font-size: 72px;
    font-weight: 400;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    h1 {
      font-size: 72px;
      margin-top: 32px;
    }
    h2 {
      font-size: 36px;
    }
  }
`
const Info = styled(a.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    max-width: 540px;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: block;
  }

  .AddInfo {
    p {
      padding: 0;
      margin: 0;
    }
  }
`

const WorkView = (props: WorkViewProps) => {
  const {
    title,
    description,
    images,
    additionalInfo,
  } = props.data.markdownRemark.frontmatter
  const [isShowInfo, setIsShowInfo] = useState(false)
  const { isMobile } = useDeviceDetect()

  const transitions = useTransition(isShowInfo, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  return (
    <Layout>
      <Container>
        <SEO title={title} />
        <h1>{title}</h1>
        <Carousel images={images} />
        <Info>
          {isMobile && <h2>Description</h2>}
          <ReactMarkdown>{description}</ReactMarkdown>
          {!isMobile && <h2>Description</h2>}
        </Info>
        {additionalInfo && (
          <Info>
            <h2>Additional</h2>
            <div className="AddInfo">
              <ReactMarkdown>{additionalInfo}</ReactMarkdown>
            </div>
          </Info>
        )}
      </Container>
    </Layout>
  )
}

export default WorkView

export const query = graphql`
  query workQ($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        description
        additionalInfo
        images {
          absolutePath
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
              src
            }
          }
        }
      }
    }
  }
`
