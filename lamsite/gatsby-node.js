const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions;

    if(node.internal.type === 'MarkdownRemark'){
        const slug = createFilePath({ node, getNode, basePath: 'pages '});
        createNodeField({
            node,
            name: 'slug',
            value: slug,
        });
    }
}

exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions;
    return graphql(`
        {
            allMarkdownRemark{
                edges{
                    node{
                        fields{
                            slug
                        }
                    }
                }
            }
        }
    `).then(result => {
        //console.log(JSON.stringify(result, null, 4));
        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            createPage({
                path: node.fields.slug,
                component: path.resolve('./src/templates/lesson.js'),
                context: {
                    slug: node.fields.slug,
                },
            });
        });
    });
}
