import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout.js";
import LessonNugget from '../components/lessonNugget.js';

export default ({ data }) => {
    return (
    <Layout>
        <h1>Recent Lessons and Assignments</h1>
        {data.allMarkdownRemark.edges.map(({ node }) => (
            <LessonNugget 
                key={node.id}
                date={node.frontmatter.date}
                subject={node.frontmatter.subject}
                title={node.frontmatter.title}
                unit={node.frontmatter.unit}
                excerpt={node.excerpt}
                slug={node.fields.slug}
                homework={node.frontmatter.homework}
            />
        ))}
    </Layout>
    );
}

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
      filter: { frontmatter: {date: {eq: "2019-09-04"}}
      }) {
      edges {
        node {
          id
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            subject
            title
            unit
            homework
          }
          excerpt
          fields{
              slug
          }
        }
      }
    }
  }
  `;