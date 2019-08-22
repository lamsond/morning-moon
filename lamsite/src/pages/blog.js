import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout.js";
import LessonList from "../components/lessonList.js";
import coursesStyles from './courses.module.css';

export default ({ data }) => (
<Layout>
    <h1>Things I've been learning about</h1>
    <ul className={coursesStyles.list}>
        <li>Graphql
            <ul>
                {data.graph.edges.map(({ node }) => (
                <LessonList 
                    key={node.id}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                />))}
            </ul>
        </li>
        <li>JavaScript
            <ul>
                {data.js.edges.map(({ node }) => (
                <LessonList 
                    key={node.id}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                />))}
            </ul>
        </li>
        <li>React
            <ul>
                {data.react.edges.map(({ node }) => (
                <LessonList 
                    key={node.id}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                />))}
            </ul>
        </li>
        <li>Jamstack
            <ul>
                {data.jam.edges.map(({ node }) => (
                <LessonList 
                    key={node.id}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                />))}
            </ul>
        </li>
    </ul>
</Layout>
);
export const query = graphql`
query {
    graph: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
      filter: { frontmatter: {subject: {eq: "graphql"}}
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
    js: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
        filter: { frontmatter: {subject: {eq: "javascript"}}
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
      react: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
        filter: { frontmatter: {subject: {eq: "react"}}
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
      jam: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
        filter: { frontmatter: {subject: {eq: "jam-stack"}}
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