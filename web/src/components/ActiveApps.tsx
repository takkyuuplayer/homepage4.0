import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { Table } from 'reactstrap'
import AppLink from '../components/AppLink'
import apps, { AppStatuses, IAppData } from '../data/apps'

const appToTableRow: React.SFC<IAppData> = (app) => (
  <tr key={app.title}>
    <th style={{ padding: '10px' }} className="align-middle" scope="row">
      <AppLink {...app} />
    </th>
    <td className="align-middle">{app.title}</td>
    <td className="align-middle">
      <FormattedMessage id={`app.${app.title}`} />
    </td>
  </tr>
)

const ActiveApps = () => (
  <Table size="sm">
    <thead>
      <tr>
        <th></th>
        <th>
          <FormattedMessage id="app.title" />
        </th>
        <th>
          <FormattedMessage id="app.description" />
        </th>
      </tr>
    </thead>
    <tbody>
      {apps
        .filter((app) => app.status === AppStatuses.active)
        .map((app) => appToTableRow(app))}
    </tbody>
  </Table>
)

export default ActiveApps
