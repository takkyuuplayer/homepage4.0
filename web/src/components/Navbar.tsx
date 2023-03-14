import { Link } from 'gatsby-link'
import * as React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { useTranslation } from 'react-i18next'
import LocaleSelector from './LocaleSelector'
import Logo from './Logo'

const Blogs = () => {
  const { t } = useTranslation()
  return (
    <Dropdown>
      <Dropdown.Toggle>{t('navigation.blog')}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <a
            target="blank"
            className="dropdown-item"
            href="http://takkyuuplayer.hatenablog.com/"
          >
            {t('blog.now')} ~ 2014
          </a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a
            target="blank"
            className="dropdown-item"
            href="https://takkyuuplayer.blogspot.com/"
          >
            2014 ~ 2010
          </a>
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item>
          <a
            target="blank"
            className="dropdown-item"
            href="http://lang-8.com/44064/journals"
          >
            English
          </a>
        </Dropdown.Item>
        <Dropdown.Item>
          <a
            target="blank"
            className="dropdown-item"
            href="https://medium.com/@takkyuuplayer"
          >
            English (Tech)
          </a>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

const Maths = () => {
  const { t } = useTranslation()
  return (
    <Dropdown>
      <Dropdown.Toggle>{t('navigation.math')}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>
          <Link className="dropdown-item" to="/math/">
            {t('navigation.math.kingdom')}
          </Link>
        </Dropdown.Item>
        <Dropdown.Item>
          <Link className="dropdown-item" to="/math_class/">
            {t('navigation.math.class')}
          </Link>
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

const Navigation = () => {
  const { t } = useTranslation()
  return (
    <Navbar color="dark" expand="md">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <Logo />
          </Link>
        </div>
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
          <Nav className="ml-auto" navbar>
            <LocaleSelector />
          </Nav>
        </Navbar.Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation
