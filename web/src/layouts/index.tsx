import * as React from "react";
import Helmet from "react-helmet";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "reactstrap";
import Footer from "../components/footer";
import Header from "../components/header";

import { Provider } from "react-intl-redux";
import store from "../store";

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
  <Provider store={store}>
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
        <main className="main">
          {children()}
        </main>
      </Container>
      <Footer />
    </div>
  </Provider>
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
