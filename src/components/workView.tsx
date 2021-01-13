import React, { useState } from "react"
import { graphql } from "gatsby"
import styled from "styled-components"
import Img from "gatsby-image"
import { useTransition, animated as a } from "react-spring"
import Layout from "./layout"
import SEO from "./seo"
import { useDeviceDetect } from "../utils/useDeviceDetect"
import Link from "gatsby-plugin-transition-link/AniLink"
import eye from "../images/eye.png"
import info from "../images/info.png"
import Carousel from "./carousel"

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
  @media only screen and (max-width: 1000px) {
    margin-top: 150px;
  }
`
const Info = styled(a.div)`
  display: flex;
  justify-content: space-between;
  align-items: center;

  p {
    max-width: 540px;
  }

  .AddInfo {
    p {
      padding: 0;
      margin: 0;
    }
  }
`

const MoreInfoButton = styled.div`
  position: fixed;
  right: 50px;
  bottom: 20px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  transition: all 0.3s;
  height: 50px;
  width: 50px;

  img {
    height: 60px;
  }

  .info-icon {
    height: 100px;
  }
`

const WorkView = (props: WorkViewProps) => {
  const {
    title,
    description,
    images,
    slug,
    additionalInfo,
  } = props.data.worksJson
  const [isShowInfo, setIsShowInfo] = useState(false)
  const { isMobile } = useDeviceDetect()

  const transitions = useTransition(isShowInfo, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  const pageTitle = slug.split("/")[0].split("-")[0]

  console.log(images)
  console.log(additionalInfo)

  return (
    <Layout>
      <Container>
        <SEO title={pageTitle} />
        <h1>{title}</h1>
        <Carousel images={images} />
        <Info>
          <p>{description}</p>
          <h2>Description</h2>
        </Info>
        {additionalInfo && (
          <Info>
            <h2>Additional</h2>
            <div className="AddInfo">
              {additionalInfo.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
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
    worksJson(id: { eq: $id }) {
      title
      slug
      description
      additionalInfo
      images {
        childImageSharp {
          fluid(maxWidth: 1440) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
