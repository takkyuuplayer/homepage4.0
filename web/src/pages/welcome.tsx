import * as React from 'react'
import Alert from 'react-bootstrap/Alert'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

const serverHistory = [
  {
    title: 'Yahoo',
    url: 'http://www.geocities.jp/takkyuuplayer/',
  },
  {
    title: 'Infoseek',
    url: 'http://takkyuuplayer.hp.infoseek.co.jp/',
  },
  {
    title: 'land.to',
    url: 'http://takkyuuplayer.ps.land.to/',
  },
  {
    title: '@PAGES',
    url: 'http://www21.atpages.jp/takkyuuplayer/',
  },
  {
    title: '000webhost',
    url: 'http://takkyuuplayer.netau.net/',
  },
  {
    title: 'Amazon EC2',
    url: 'https://aws.amazon.com/ec2/',
  },
  {
    title: 'さくらVPS',
    url: 'http://vps.sakura.ad.jp/',
  },
  {
    title: 'Amazon SAM',
    url: 'https://github.com/awslabs/serverless-application-model',
  },
]

const Histories = serverHistory
  .map((link) => (
    <a key={link.url} href={link.url} title={link.title}>
      {link.title}
    </a>
  ))
  .reduce(
    (prev, elem, idx) =>
      prev.length === 0
        ? [elem]
        : [...prev, <span key={idx}> &rarr; </span>, elem],
    []
  )

export default () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <h4>{t('welcome.title')}</h4>
      <p>{t('welcome.message1')}</p>
      <Alert className="text-center" color="secondary">
        {Histories}
      </Alert>
      <p>{t('welcome.message2')}</p>
      <p>{t('welcome.message3')}</p>
    </Layout>
  )
}
