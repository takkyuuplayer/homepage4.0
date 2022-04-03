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
import { combineReducers } from 'redux'

import LocaleSelector from './LocaleSelector'
import Logo from './Logo'

enum ActionTypes {
  TOGGLE = 'TOGGLE',
}
const toggleAction = () => ({
  type: ActionTypes.TOGGLE,
})
type localAction = ReturnType<typeof toggleAction>

const isOpen = (state = false, action: localAction) => {
  switch (action.type) {
    case ActionTypes.TOGGLE:
      return !state
    default:
      return state
  }
}
const reducer = {
  isOpen,
}
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

const NavCollapse = ({ isOpen }: { isOpen: boolean }) => {
  const { t } = useTranslation()
  return (
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
  )
}

export default class Navigation extends React.Component {
  private static reducer = combineReducers(reducer)
  public state = Navigation.reducer(undefined, {} as any)
  public render() {
    return (
      <div>
        <Navbar color="dark" dark expand="md">
          <div className="container">
            <div className="navbar-brand">
              <Link to="/">
                <Logo />
              </Link>
            </div>
            <NavbarToggler onClick={() => this.dispatch(toggleAction())} />
            <NavCollapse isOpen={this.state.isOpen} />
          </div>
        </Navbar>
      </div>
    )
  }
  private dispatch = (action: localAction) => {
    this.setState(Navigation.reducer(this.state, action))
  }
}
