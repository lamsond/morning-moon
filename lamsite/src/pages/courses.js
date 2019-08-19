import React from "react"
import { graphql } from 'gatsby';

import Layout from "../components/layout.js";
import LessonList from "../components/lessonList.js";
import coursesStyles from './courses.module.css';


export default ({ data }) => (
<Layout>
    <h1>Courses</h1>
    <ul className={coursesStyles.list}>
        <li>Algebra 1
            <ul>
                {data.alg.edges.map(({ node }) => (
                <LessonList 
                    key={node.id}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                />))}
            </ul>
        </li>
        <li>AP Computer Science Principles
            <ul>
                {data.csp.edges.map(({ node }) => (
                <LessonList 
                    key={node.id}
                    title={node.frontmatter.title}
                    slug={node.fields.slug}
                />))}
            </ul>
        </li>
        <li>AP Computer Science A
            <ul>
                {data.csa.edges.map(({ node }) => (
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
    alg: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
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
    csp: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
        filter: { frontmatter: {subject: {eq: "AP Computer Science Principles"}}
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
      csa: allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, 
        filter: { frontmatter: {subject: {eq: "AP Computer Science A"}}
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