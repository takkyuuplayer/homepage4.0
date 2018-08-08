import Link from "gatsby-link";
import * as React from "react";

interface IHeaderProps {
  siteTitle: string;
}

const Header = ({ siteTitle }: IHeaderProps) => (
  <div>
    <div>
      <h1>
        <Link to="/" >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </div>
);

export default Header;
