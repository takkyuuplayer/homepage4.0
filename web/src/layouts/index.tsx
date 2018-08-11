import * as React from "react";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Footer from "../components/footer";
import Header from "../components/header";

/* tslint:disable no-var-requires */
require("./index.css");
/* tslint:enable no-var-requires */

interface ILayoutProps {
  children: any;
  data: {
    site: {
      siteMetadata: {
        title: string,
      },
    },
  };
}

const Layout = ({ children, data }: ILayoutProps) => (
  <div>
    <Header />
    <Container>
      <Helmet
        title={data.site.siteMetadata.title}
        meta={[
          { name: "description", content: "Sample" },
          { name: "keywords", content: "sample, something" },
        ]}
      />
      <div>
        {children()}
      </div>
    </Container>
    <Footer />
  </div>
);

export default Layout;

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
