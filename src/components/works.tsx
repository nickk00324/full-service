import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import WorkCard from "./workCard"

// presentational component for work cards

const Grid = styled.div`
  margin-top: 50px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-template-rows: repeat(auto-fill, minmax(266px, 266px));
  grid-gap: 2rem;
  justify-content: space-between;
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
