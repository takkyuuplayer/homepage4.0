import Link from "gatsby-link";
import * as React from "react";
import { Timeline } from "react-twitter-widgets";

import { Col, Row } from "reactstrap";
import History from "../components/History";

const IndexPage = () => (
  <Row>
    <Col md="8">
      <History />
    </Col>
    <Col md="4">
      <Timeline
        dataSource={{
          screenName: "takkyuuplayer",
          sourceType: "profile",
        }}
        options={{
          height: "500",
          username: "takkyuuplayer",
        }}
      />
    </Col>
  </Row>
);

export default IndexPage;
