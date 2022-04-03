import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { connect } from 'react-redux'
import { RootState } from '../ducks'
import createHistoryItems, { IHistoryItem } from './HistoryItems'

interface IBlog {
  histories: IHistoryItem[]
}

const Blog: React.FC<IBlog> = ({ histories }) => {
  const { t } = useTranslation()
  return (
    <article className="history">
      <h4>{t('navigation.blog')}</h4>
      <hr />
      <ul className="list-unstyled">{createHistoryItems(histories)}</ul>
    </article>
  )
}

const mapStateToProps = (state: RootState) => ({
  histories: state.blog.map((feed) => ({
    date: new Date(feed.published),
    title: feed.title,
    url: feed.link,
  })),
})

export default connect(mapStateToProps)(Blog)
