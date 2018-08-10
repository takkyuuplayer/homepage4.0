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
import { Action, combineReducers } from "redux";

import Logo from "./Logo";

const TOGGLE = "TOGGLE";
const toggleAction = {
    type: TOGGLE,
};
const isOpen = (state = false, action: Action = { type: undefined }) => {
    switch (action.type) {
        case TOGGLE:
            return !state;
        default:
            return state;
    }
};

const Blogs = () => (
    <UncontrolledDropdown nav inNavbar>
        <DropdownToggle nav caret>
            Blog
        </DropdownToggle>
        <DropdownMenu right>
            <DropdownItem>
                <a
                    target="blank"
                    className="dropdown-item"
                    href="http://takkyuuplayer.hatenablog.com/"
                >Now ~ 2014
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

export default class Navigation extends React.Component {
    private static reducer = combineReducers({
        isOpen,
    });
    public state = Navigation.reducer(undefined, undefined);
    public render() {
        return (
            <div>
                <Navbar color="dark" dark expand="md">
                    <div className="container">
                        <NavbarBrand href="/"><Logo /></NavbarBrand>
                        <NavbarToggler onClick={() => this.dispatch(toggleAction)} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="mr-auto" navbar>
                                <NavItem>
                                    <Link className="nav-link" to="/app/">App</Link>
                                </NavItem>
                                <Blogs />
                                <NavItem>
                                    <Link className="nav-link" to="/math/">Math</Link>
                                </NavItem>
                                <NavItem>
                                    <Link className="nav-link" to="/author/">Author</Link>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink
                                        href="https://twitter.com/intent/tweet?screen_name=takkyuuplayer&text=Hey!"
                                        target="_blank"
                                    >
                                        Contact
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </div>
        );
    }
    private dispatch = (action: Action) => {
        this.setState(Navigation.reducer(this.state, action));
    }
}
