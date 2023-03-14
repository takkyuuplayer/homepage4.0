import 'bootstrap/dist/css/bootstrap.min.css'
import { graphql, useStaticQuery } from 'gatsby'
import * as React from 'react'
import { Helmet } from 'react-helmet'
import { Container } from 'reactstrap'
import '../i18n/i18n'
import Footer from './Footer'
import Header from './Header'

/* tslint:disable no-var-requires */
require('./index.css')
/* tslint:enable no-var-requires */

interface ILayoutProps {
  children: any
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

  return (
    <div>
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
