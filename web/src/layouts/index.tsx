import * as React from "react";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Header from "../components/header";

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
