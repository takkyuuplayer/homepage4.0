import * as React from "react";
import { FormattedDate, FormattedHTMLMessage, FormattedMessage } from "react-intl";
import { Table } from "reactstrap";
import AppLink from "../components/AppLink";
import apps from "../data/apps";

const appToTableRow = (app: any) => (
    <tr key={app.title} className="table-active">
        <th style={{ padding: "10px" }} className="align-middle" scope="row">
            <AppLink {...app} />
        </th>
        <td className="align-middle">{app.title}</td>
        <td className="align-middle"><FormattedHTMLMessage id={`app.${app.title}`} /></td>
        <td className="align-middle">{app.env}</td>
        <td className="align-middle">
            {app.publishedOn ? <FormattedDate value={app.publishedOn} /> : null}
        </td>
        <td className="align-middle">
            {app.version} {app.lastUpdatedOn ? ["(", <FormattedDate value={app.lastUpdatedOn} />, ")"] : null}
        </td>
    </tr>
);

const InactiveApps = () => (
    <Table size="sm">
        <thead>
            <tr>
                <th></th>
                <th><FormattedMessage id="app.title" /></th>
                <th style={{ width: "40%" }}><FormattedMessage id="app.description" /></th>
                <th><FormattedMessage id="app.environment" /></th>
                <th><FormattedMessage id="app.published_on" /></th>
                <th><FormattedMessage id="app.version" /></th>
            </tr>
        </thead>
        <tbody>
            {apps.filter((app) => app.status === "inactive").map((app) => appToTableRow(app))}
        </tbody>
    </Table>
);

export default InactiveApps;