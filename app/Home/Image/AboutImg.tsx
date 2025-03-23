// import React from 'react';
// import { StaticQuery, graphql } from 'gatsby';
// import Img, { FixedObject } from 'gatsby-image';
//
// interface Props {
//   filename: string;
//   alt: string;
// }
//
// interface Data {
//   images: {
//     edges: {
//       node: {
//         relativePath: string;
//         name: string;
//         childImageSharp: {
//           fixed: FixedObject | FixedObject[];
//         };
//       };
//     }[];
//   };
// }
//
// const AboutImg = (props: Props) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         images: allFile {
//           edges {
//             node {
//               relativePath
//               name
//               childImageSharp {
//                 fixed {
//                   ...GatsbyImageSharpFixed
//                 }
//               }
//             }
//           }
//         }
//       }
//     `}
//     render={(data: Data) => {
//       const image = data.images.edges.find((n) => n.node.relativePath.includes(props.filename));
//
//       if (!image) {
//         return null;
//       }
//
//       const imageFixed = image.node.childImageSharp.fixed;
//       return <Img className="rounded shadow-lg" alt={props.alt} fixed={imageFixed} />;
//     }}
//   />
// );
//
// export default AboutImg;
