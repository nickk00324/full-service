import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import WorkCard from "./workCard"

// presentational component for work cards

const Grid = styled.div`
  height: 100vh;
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  grid-gap: 2rem;
  justify-content: space-between;

  a {
    &:hover {
      transform: scale(1.05);
    }
  }

  @media only screen and (max-width: ${props => props.theme.mobileSize}) {
    display: block;
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
                  fluid {
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
