import React from "react";
import { graphql } from "gatsby";
import Img from "gatsby-image";

import Layout from "../components/layout";
import SEO from "../components/seo";
import ttLogo from "../images/tt-logo.svg";

const IndexPage = props => (
  <Layout>
    <SEO title="Home" keywords={[`tap`, `tourist`, `beverage`, `weddings`]} />

    <div className="text-center sm:w-full">
      <Img
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%"
        }}
        fluid={props.data.imageOne.childImageSharp.fluid}
        class=""
        alt="Bar Picture"
      />
    </div>
    <div className="text-center sm:w-full absolute pin p-30">
      <img
        src={ttLogo}
        className="block mx-auto sm:w-full md:w-1/2"
        alt="Tap Tourist Logo"
      />
    </div>
  </Layout>
);

export default IndexPage;

export const pageQuery = graphql`
  query {
    imageOne: file(relativePath: { eq: "splashbeer.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 1200) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
