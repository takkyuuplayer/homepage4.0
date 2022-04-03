import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { FormatDate } from './DateTime'

export interface IHistoryItem {
  date: Date
  title: string
  url?: string
}

export const HistoryItem: React.FC<IHistoryItem> = ({ date, title, url }) => {
  const line = [<FormatDate date={date} />, ' ', title]
  return url ? (
    <li className="history-item">
      <a href={url} target="_blank">
        {line}
      </a>
    </li>
  ) : (
    <li className="history-item">{line}</li>
  )
}

export default (histories: IHistoryItem[]) =>
  histories.map((history) => (
    <HistoryItem key={JSON.stringify(history)} {...history} />
  ))
