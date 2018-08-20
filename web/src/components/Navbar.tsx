import Link from "gatsby-link";
import * as React from "react";
import {
    Collapse,
    DropdownItem,
    DropdownMenu,
    DropdownToggle,
    Nav,
    Navbar,
    NavbarBrand,
    NavbarToggler,
    NavItem,
    NavLink,
    UncontrolledDropdown,
} from "reactstrap";
import { combineReducers } from "redux";

import { FormattedMessage } from "react-intl";
import { ActionType, createAction, getType, StateType } from "typesafe-actions";
import LocaleSelector from "./LocaleSelector";
import Logo from "./Logo";

const toggleAction = createAction("TOGGLE");
type localAction = ActionType<typeof toggleAction>;

const isOpen = (state = false, action: localAction) => {
    switch (action.type) {
        case getType(toggleAction):
            return !state;
        default:
            return state;
    }
};
const reducer = {
    isOpen,
};
type localState = StateType<typeof reducer>;

const Blogs = () => (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            <FormattedMessage id="navigation.blog" />
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem>
                <a
                    target="blank"
                    className="dropdown-item"
                    href="http://takkyuuplayer.hatenablog.com/"
                >
                    <FormattedMessage id="blog.now" /> ~ 2014
                </a>
            </DropdownItem>
            <DropdownItem>
                <a
                    target="blank"
                    className="dropdown-item"
                    href="https://takkyuuplayer.blogspot.com/"
                >2014 ~ 2010
                </a>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
                <a
                    target="blank"
                    className="dropdown-item"
                    href="http://lang-8.com/44064/journals"
                >English
                </a>
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
);

const Maths = () => (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            <FormattedMessage id="navigation.math" />
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem>
                <Link className="dropdown-item" to="/math/">
                    <FormattedMessage id="navigation.math.kingdom" />
                </Link>
            </DropdownItem>
            <DropdownItem>
                <Link className="dropdown-item" to="/math_class/">
                    <FormattedMessage id="navigation.math.class" />
                </Link>
            </DropdownItem>
        </DropdownMenu>
    </UncontrolledDropdown>
);

export default class Navigation extends React.Component {
    private static reducer = combineReducers<localState, localAction>(reducer);
    public state = Navigation.reducer(undefined, {} as any);
    public render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="container">
                        <div className="navbar-brand">
                            <Link to="/"><Logo /></Link>
                        </div>
                        <NavbarToggler onClick={() => this.dispatch(toggleAction())} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/app/">
                                        <FormattedMessage id="navigation.app" />
                                    </Link>
                                </NavItem>
                                <Blogs />
                                <Maths />
                                <NavItem>
                                    <Link className="nav-link" to="/welcome/">
                                        <FormattedMessage id="navigation.welcome" />
                                    </Link>
                                </NavItem>
                                <NavItem>
                                    <NavLink
                                        href="https://twitter.com/intent/tweet?screen_name=takkyuuplayer&text=Hey!"
                                        target="_blank"
                                    >
                                        <FormattedMessage id="navigation.contact" />
                                    </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <LocaleSelector />
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
    private dispatch = (action: localAction) => {
        this.setState(Navigation.reducer(this.state, action));
    }
}
