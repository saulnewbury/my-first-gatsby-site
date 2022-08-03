import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

const BlogPage = ({ data }) => {
  console.log(data.allFile.nodes)
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
        {data.allFile.nodes.map(post => (
          <li key={post.name}>{post.name}</li>
        ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query MyQuery {
    allFile(filter: { sourceInstanceName: { eq: "blog" } }) {
      nodes {
        name
      }
    }
  }
`

export default BlogPage
