import {
  faDownload,
  faExternalLinkAlt,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as React from 'react'
import { AppTypes, type IAppData } from '../data/apps'

const AppLink: React.FC<IAppData> = ({ type, url, title }) =>
  type === AppTypes.web ? (
    <a target="_blank" href={url} title={title} rel="noopener">
      <FontAwesomeIcon icon={faExternalLinkAlt} />
    </a>
  ) : (
    <a href={url} title={title}>
      <FontAwesomeIcon icon={faDownload} />
    </a>
  )

export default AppLink
