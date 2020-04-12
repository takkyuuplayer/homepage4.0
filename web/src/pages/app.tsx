import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import ActiveApps from '../components/ActiveApps'
import InactiveApps from '../components/InactiveApps'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h4>
      <FormattedMessage id="app.active" />
    </h4>
    <ActiveApps />
    <h4 style={{ marginTop: '2em' }}>
      <FormattedMessage id="app.inactive" />
    </h4>
    <InactiveApps />
  </Layout>
)
