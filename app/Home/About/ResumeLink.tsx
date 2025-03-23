// import { graphql, StaticQuery } from 'gatsby';
// import React from 'react';
//
// interface Props {
//   filename: string;
// }
//
// interface Data {
//   pdfs: {
//     edges: {
//       node: {
//         publicURL: string;
//       };
//     }[];
//   };
// }
//
// export const ResumeLink = ({ filename }: Props) => (
//   <StaticQuery
//     query={graphql`
//       query {
//         pdfs: allFile(filter: { extension: { eq: "pdf" } }) {
//           edges {
//             node {
//               publicURL
//             }
//           }
//         }
//       }
//     `}
//     render={(data: Data) => {
//       const pdf = data.pdfs.edges.find((n) => n.node.publicURL.includes(filename));
//
//       if (!pdf) {
//         return null;
//       }
//       return (
//         <a
//           target="_blank"
//           rel="noopener noreferrer"
//           className="cta-btn cta-btn--resume"
//           href={pdf.node.publicURL}
//         >
//           Resume
//         </a>
//       );
//     }}
//   />
// );
