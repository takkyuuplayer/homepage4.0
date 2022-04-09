import * as React from 'react'
import { useTranslation } from 'react-i18next'
import ActiveApps from '../components/ActiveApps'
import InactiveApps from '../components/InactiveApps'
import Layout from '../components/layout'

export default () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <h4>{t('app.active')}</h4>
      <ActiveApps />
      <h4 style={{ marginTop: '2em' }}>{t('app.inactive')}</h4>
      <InactiveApps />
    </Layout>
  )
}
