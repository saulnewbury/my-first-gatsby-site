import * as React from "react"
import Layout from "../../components/layout"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx" // for interpreting body

const BlogPost = props => {
  console.log(props)
  const data = props.data
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <p>{data.mdx.frontmatter.date}</p>
      {/* <p>Last Updated: {data.parent.modifiedTime}</p> */}
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

// Define query variable to pull in relevant data
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      parent {
        ... on File {
          modifiedTime(formatString: "MMMM D, YYYY")
        }
      }
      frontmatter {
        title
        date(formatString: "MMMM D,  YYYY")
      }
      body
    }
  }
`

export default BlogPost

/*
To use the query variable inside your query, do the following:

1. Define your query variable. It should include the variable name (with a $ in front of it) and its GraphQL data type.
2. Use the query variable in your query. (You’ll need to add a $ before the variable name.)
*/

/* 
When you use Gatsby’s File System Route API, it automatically adds some props into the page template component for each page:

  • The id for the data layer node used to create the page.
  • The field you used to create the dynamic part of the route. (In this case, the slug field.)

Under the hood, Gatsby makes both of these values available to use as query variables in your page queries.

The fastest way to look up nodes is using the id field, so use the id query variable instead of slug.
*/
