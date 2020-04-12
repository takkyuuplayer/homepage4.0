import * as React from 'react'
import { FormattedDate } from 'react-intl'

export interface IHistoryItem {
  date: Date
  title: string
  url?: string
}
export const HistoryItem: React.SFC<IHistoryItem> = ({ date, title, url }) => {
  const line = [
    <FormattedDate
      key="dummy"
      value={date}
      year="numeric"
      month="2-digit"
      day="2-digit"
    />,
    ' ',
    title,
  ]
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
