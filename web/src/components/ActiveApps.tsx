import * as React from 'react'
import Table from 'react-bootstrap/Table'
import { useTranslation } from 'react-i18next'
import AppLink from '../components/AppLink'
import apps, { AppStatuses, type IAppData } from '../data/apps'

const AppRow: React.FC<IAppData> = (app) => {
  const { t } = useTranslation()
  return (
    <tr key={app.title}>
      <th style={{ padding: '10px' }} className="align-middle">
        <AppLink {...app} />
      </th>
      <td className="align-middle">{app.title}</td>
      <td className="align-middle">
        <div
          // biome-ignore lint/security/noDangerouslySetInnerHtml: descriptions in our own translation file contain HTML links
          dangerouslySetInnerHTML={{
            __html: t(`app.${app.title}`),
          }}
        />
      </td>
    </tr>
  )
}

const ActiveApps = () => {
  const { t } = useTranslation()
  return (
    <Table size="sm">
      <thead>
        <tr>
          <th></th>
          <th>{t(`app.title`)}</th>
          <th>{t(`app.description`)}</th>
        </tr>
      </thead>
      <tbody>
        {apps
          .filter((app) => app.status === AppStatuses.active)
          .map((app) => (
            <AppRow key={app.title} {...app} />
          ))}
      </tbody>
    </Table>
  )
}

export default ActiveApps
