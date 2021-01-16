import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import WorkCard from "./workCard"

// presentational component for work cards

const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: space-between;
  background-color: white;

  @media only screen and (max-width: 810px) {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-auto-rows: 225px;
  }

  @media only screen and (max-width: 782px) {
    grid-auto-rows: 300px;
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }
`

const Works = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              title
              images {
                childImageSharp {
                  fluid(maxWidth: 1440) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  `)

  const allWorks = data.allMarkdownRemark.edges

  return (
    <Grid>
      {allWorks.map((w: any) => {
        const { title, images, url } = w.node.frontmatter
        return (
          <WorkCard
            title={title}
            image={images[0]}
            slug={w.node.fields.slug}
            key={title}
          />
        )
      })}
    </Grid>
  )
}

export default Works
