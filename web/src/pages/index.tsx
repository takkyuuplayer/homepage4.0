import * as React from 'react'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import { Timeline } from 'react-twitter-widgets'
import Blog from '../components/Blog'
import History from '../components/History'
import Layout from '../components/layout'

const IndexPage = () => (
  <Layout>
    <Row>
      <Col md="8">
        <Blog />
        <History />
      </Col>
      <Col md="4">
        <Timeline
          dataSource={{
            screenName: 'takkyuuplayer',
            sourceType: 'profile',
          }}
          options={{
            height: '530',
            username: 'takkyuuplayer',
          }}
        />
      </Col>
    </Row>
  </Layout>
)

export default IndexPage
