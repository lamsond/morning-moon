import React from "react"
import Layout from "../components/layout.js";
import LessonList from "../components/lessonList.js";
import coursesStyles from './courses.module.css';
import { graphql } from 'gatsby';

export default ({ data }) => (
<Layout>
    <h1>Courses</h1>
    <ul className={coursesStyles.list}>
        <li>Algebra 1
            <ul>
                {data.allMarkdownRemark.edges.map(({ node }) => (
                <LessonList 
                    key={node.id}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                />))}
            </ul>
        </li>
        
        <li>AP Computer Science Principles</li>
        <li>AP Computer Science A</li>
    </ul>
</Layout>
);

export const query = graphql`
query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
      filter: { frontmatter: {subject: {eq: "Algebra 1"}}
      }) {
      edges {
        node {
          id
          frontmatter {
            subject
            title
          }
          fields{
              slug
          }
        }
      }
    }
  }
  `;