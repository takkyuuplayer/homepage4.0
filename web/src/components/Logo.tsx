import * as React from "react";
import * as logo from "../static/img/logo-white.gif";

interface ILogoSize {
    width?: string;
    height?: string;
}

const Logo: React.SFC<ILogoSize> = (props) => (
    <img src={logo} alt="Logo" {...props} />
);

Logo.defaultProps = {
    height: "50px",
};

export default Logo;
