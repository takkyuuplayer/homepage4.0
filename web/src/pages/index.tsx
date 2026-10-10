import * as React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Blog from '../components/Blog'
import History from '../components/History'
import Layout from '../components/layout'
import TwitterTimeline from '../components/TwitterTimeline'

const IndexPage = () => {
  return (
    <Layout>
      <Row>
        <Col md="8">
          <Blog />
          <History />
        </Col>
        <Col md="4">
          <TwitterTimeline username="takkyuuplayer" />
        </Col>
      </Row>
    </Layout>
  )
}

export default IndexPage
