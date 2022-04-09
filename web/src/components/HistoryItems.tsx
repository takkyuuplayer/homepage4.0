import * as React from 'react'
import { FormatDate } from './DateTime'

export interface IHistoryItem {
  date: Date
  title: string
  url?: string
}

export const HistoryItem: React.FC<IHistoryItem> = ({ date, title, url }) => {
  const line = [<FormatDate key={`${date}_${title}`} date={date} />, ' ', title]
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

export default (histories: ReadonlyArray<IHistoryItem>) =>
  histories.map((history) => (
    <HistoryItem key={JSON.stringify(history)} {...history} />
  ))
