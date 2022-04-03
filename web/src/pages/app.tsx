import { t } from 'i18next'
import * as React from 'react'
import ActiveApps from '../components/ActiveApps'
import InactiveApps from '../components/InactiveApps'
import Layout from '../components/layout'

export default () => (
  <Layout>
    <h4>{t('app.active')}</h4>
    <ActiveApps />
    <h4 style={{ marginTop: '2em' }}>{t('app.inactive')}</h4>
    <InactiveApps />
  </Layout>
)
