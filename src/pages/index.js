import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import catAndHumanIllustration from "../images/cat-and-human-illustration.svg";
import ttLogo from "../images/tt-logo.svg";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`tap`, `tourist`, `beverage`, `weddings`]} />

    <div className="text-center">
      <img
        src={ttLogo}
        className="block mx-auto w-1/2"
        alt="Cat and human sitting on a couch"
      />
    </div>
  </Layout>
);

export default IndexPage;
