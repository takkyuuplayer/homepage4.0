import Link from "gatsby-link";
import * as React from "react";

import { Col, Row } from "reactstrap";
import History from "../components/History";

const IndexPage = () => (
  <Row>
    <Col md="8">
      <History />
    </Col>
    <Col md="4"></Col>
  </Row>
);

export default IndexPage;
