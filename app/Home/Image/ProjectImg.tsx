import React from 'react';
import { StaticQuery, graphql } from 'gatsby';
import Img, { FluidObject } from 'gatsby-image';

interface Props {
  filename: string;
  alt: string;
}

interface Data {
  images: {
    edges: {
      node: {
        relativePath: string;
        name: string;
        childImageSharp: {
          fluid: FluidObject | FluidObject[];
        };
      };
    }[];
  };
}

const ProjectImg = ({ filename, alt }: Props) => (
  <StaticQuery
    query={graphql`
      query {
        images: allFile {
          edges {
            node {
              relativePath
              name
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    `}
    render={(data: Data) => {
      const image = data.images.edges.find((n) => n.node.relativePath.includes(filename));

      if (!image) {
        return null;
      }

      const imageFluid = image.node.childImageSharp.fluid;
      return <Img alt={alt} fluid={imageFluid} />;
    }}
  />
);

export default ProjectImg;
