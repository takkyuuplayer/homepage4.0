import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import Alert from 'react-bootstrap/Alert'
import Container from 'react-bootstrap/Container'
import { Helmet } from 'react-helmet'
import { useTranslation } from 'react-i18next'
import '../i18n/i18n'
import Footer from './Footer'
import Header from './Header'
import './index.css'

const NEW_SITE_URL = 'https://takkyuuplayer.com'

interface ILayoutProps {
  children: React.ReactNode
}

const Layout = ({ children }: ILayoutProps) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const { t } = useTranslation()

  return (
    <div>
      <Alert variant="warning" className="text-center mb-0 rounded-0">
        {t('common.moved')}:{' '}
        <Alert.Link href={NEW_SITE_URL}>{NEW_SITE_URL}</Alert.Link>
      </Alert>
      <Header />
      <Container>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'takkyuuplayer' },
            { name: 'keywords', content: 'takkyuuplayer' },
          ]}
        />
        <main className="main">{children}</main>
      </Container>
      <Footer />
    </div>
  )
}

export default Layout
