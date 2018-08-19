import * as React from "react";
import { FormattedDate, FormattedHTMLMessage, FormattedMessage } from "react-intl";
import ActiveApps from "../components/ActiveApps";
import AppLink from "../components/AppLink";
import InactiveApps from "../components/InactiveApps";
import apps from "../data/apps";

export default () => (
    <div>
        <h4><FormattedMessage id="app.active" /></h4>
        <ActiveApps />
        <h4 style={{ marginTop: "2em" }}><FormattedMessage id="app.inactive" /></h4>
        <InactiveApps />
    </div>
);
