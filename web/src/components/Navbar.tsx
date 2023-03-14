import { Link } from 'gatsby-link'
import * as React from 'react'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useTranslation } from 'react-i18next'
import LocaleSelector from './LocaleSelector'
import Logo from './Logo'

const Blogs = () => {
  const { t } = useTranslation()
  return (
    <NavDropdown title={t('navigation.blog')}>
      <NavDropdown.Item>
        <a
          target="blank"
          className="dropdown-item"
          href="http://takkyuuplayer.hatenablog.com/"
        >
          {t('blog.now')} ~ 2014
        </a>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <a
          target="blank"
          className="dropdown-item"
          href="https://takkyuuplayer.blogspot.com/"
        >
          2014 ~ 2010
        </a>
      </NavDropdown.Item>
      <NavDropdown.Divider />
      <NavDropdown.Item>
        <a
          target="blank"
          className="dropdown-item"
          href="http://lang-8.com/44064/journals"
        >
          English
        </a>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <a
          target="blank"
          className="dropdown-item"
          href="https://medium.com/@takkyuuplayer"
        >
          English (Tech)
        </a>
      </NavDropdown.Item>
    </NavDropdown>
  )
}

const Maths = () => {
  const { t } = useTranslation()
  return (
    <NavDropdown title={t('navigation.math')}>
      <NavDropdown.Item>
        <Link className="dropdown-item" to="/math/">
          {t('navigation.math.kingdom')}
        </Link>
      </NavDropdown.Item>
      <NavDropdown.Item>
        <Link className="dropdown-item" to="/math_class/">
          {t('navigation.math.class')}
        </Link>
      </NavDropdown.Item>
    </NavDropdown>
  )
}

const Navigation = () => {
  const { t } = useTranslation()
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>
          <Link to="/">
            <Logo />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="app-nav" />
        <Navbar.Collapse id="app-nav">
          <Nav className="mr-auto">
            <Nav.Item>
              <Link className="nav-link" to="/app/">
                {t('navigation.app')}
              </Link>
            </Nav.Item>
            <Blogs />
            <Maths />
            <Nav.Item>
              <Link className="nav-link" to="/welcome/">
                {t('navigation.welcome')}
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://twitter.com/intent/tweet?screen_name=takkyuuplayer&text=Hey!"
                target="_blank"
              >
                {t('navigation.contact')}
              </Nav.Link>
            </Nav.Item>
          </Nav>
          <Nav className="ms-auto" navbar>
            <LocaleSelector />
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Navigation
