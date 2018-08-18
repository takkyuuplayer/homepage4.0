import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { FormattedMessage } from "react-intl";
import { Container, Row } from "reactstrap";

const links = [
    {
        icon: faTwitter,
        url: "https://twitter.com/takkyuuplayer",
    },
    {
        icon: faLinkedin,
        url: "https://www.linkedin.com/in/takkyuuplayer/",
    },
    {
        icon: faGithub,
        url: "https://github.com/takkyuuplayer/homepage4.0#homepage-40",
    },
].map(({ icon, url }) => (
    <a href={url} target="_blank" className="social-icon">
        <FontAwesomeIcon icon={icon} />
    </a>
));

export default () => (
    <footer>
        <hr />
        <Container>
            {links}
            <span className="pull-right">
                &copy;
                <FormattedMessage id="common.takkyuuplayer" />
                {" "}
                2004 - {new Date().getFullYear()}
            </span>
        </Container>
    </footer>
);
