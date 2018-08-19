import { faDownload } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

interface IDownloadLink {
    title: string;
    url: string;
}
const DownloadLink: React.SFC<IDownloadLink> = ({ title, url }) => (
    <a href={url} title={title}>
        <FontAwesomeIcon icon={faDownload} />
    </a>
);

export default DownloadLink;
