import Link from 'gatsby-link'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import {
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Nav,
  Navbar,
  NavbarToggler,
  NavItem,
  NavLink,
  UncontrolledDropdown,
} from 'reactstrap'
import LocaleSelector from './LocaleSelector'
import Logo from './Logo'

const Blogs = () => {
  const { t } = useTranslation()
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {t('navigation.blog')}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <a
            target="blank"
            className="dropdown-item"
            href="http://takkyuuplayer.hatenablog.com/"
          >
            {t('blog.now')} ~ 2014
          </a>
        </DropdownItem>
        <DropdownItem>
          <a
            target="blank"
            className="dropdown-item"
            href="https://takkyuuplayer.blogspot.com/"
          >
            2014 ~ 2010
          </a>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem>
          <a
            target="blank"
            className="dropdown-item"
            href="http://lang-8.com/44064/journals"
          >
            English
          </a>
        </DropdownItem>
        <DropdownItem>
          <a
            target="blank"
            className="dropdown-item"
            href="https://medium.com/@takkyuuplayer"
          >
            English (Tech)
          </a>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

const Maths = () => {
  const { t } = useTranslation()
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {t('navigation.math')}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <Link className="dropdown-item" to="/math/">
            {t('navigation.math.kingdom')}
          </Link>
        </DropdownItem>
        <DropdownItem>
          <Link className="dropdown-item" to="/math_class/">
            {t('navigation.math.class')}
          </Link>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

const Navigation = () => {
  const { t } = useTranslation()
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Navbar color="dark" dark expand="md">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <Logo />
          </Link>
        </div>
        <NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <Link className="nav-link" to="/app/">
                {t('navigation.app')}
              </Link>
            </NavItem>
            <Blogs />
            <Maths />
            <NavItem>
              <Link className="nav-link" to="/welcome/">
                {t('navigation.welcome')}
              </Link>
            </NavItem>
            <NavItem>
              <NavLink
                href="https://twitter.com/intent/tweet?screen_name=takkyuuplayer&text=Hey!"
                target="_blank"
              >
                {t('navigation.contact')}
              </NavLink>
            </NavItem>
          </Nav>
          <Nav className="ml-auto" navbar>
            <LocaleSelector />
          </Nav>
        </Collapse>
      </div>
    </Navbar>
  )
}

export default Navigation
