import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Table } from 'reactstrap'
import AppLink from '../components/AppLink'
import apps, { IAppData } from '../data/apps'
import { FormatDate } from './DateTime'

const appToTableRow: React.FunctionComponent<IAppData> = (app) => {
  const { t } = useTranslation()
  return (
    <tr key={app.title} className="table-active">
      <th style={{ padding: '10px' }} className="align-middle" scope="row">
        <AppLink {...app} />
      </th>
      <td className="align-middle">{app.title}</td>
      <td className="align-middle">
        <div>{t(`app.${app.title}`)}</div>
      </td>
      <td className="align-middle">{app.env}</td>
      <td className="align-middle">
        {app.publishedOn ? <FormatDate date={app.publishedOn} /> : null}
      </td>
      <td className="align-middle">
        {app.version}{' '}
        {app.lastUpdatedOn ? <FormatDate date={app.lastUpdatedOn} /> : null}
      </td>
    </tr>
  )
}

const InactiveApps = () => {
  const { t } = useTranslation()
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th></th>
          <th>{t('app.title')}</th>
          <th style={{ width: '40%' }}>{t('app.description')}</th>
          <th>{t('app.environment')}</th>
          <th>{t('app.published_on')}</th>
          <th>{t('app.version')}</th>
        </tr>
      </thead>
      <tbody>
        {apps
          .filter((app) => app.status === 'inactive')
          .map((app) => appToTableRow(app))}
      </tbody>
    </Table>
  )
}

export default InactiveApps
