import { faDownload, faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

import { IAppData } from "../data/apps";

const AppLink: React.SFC<IAppData> = (app) => (
    app.type === "web"
        ? <a target="_blank" href={app.url} title={app.title}><FontAwesomeIcon icon={faExternalLinkAlt} /></a>
        : <a href={app.url} title={app.title}><FontAwesomeIcon icon={faDownload} /></a>
);

export default AppLink;
