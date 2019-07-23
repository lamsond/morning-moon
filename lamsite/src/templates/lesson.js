import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout.js';

export default ({ data }) => {
    const lesson = data.markdownRemark;
    return (
        <Layout>
            <div>
                <h1>{ lesson.frontmatter.title }</h1>
                <div dangerouslySetInnerHTML={{ __html: lesson.html }} />
            </div>
        </Layout>
    );
}

export const query = graphql`
    query($slug: String!){
        markdownRemark(fields: {slug: {eq: $slug}}){
            html
            frontmatter{
                title
            }
        }
    }
`