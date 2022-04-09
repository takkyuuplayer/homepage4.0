import * as React from 'react'
import { useTranslation } from 'react-i18next'
import useLocalStorage from 'use-local-storage'
import createHistoryItems from './HistoryItems'

interface IBlogFeed {
  title: string
  link: string
  published: string
  [attr: string]: string
}

export default () => {
  const [feeds, setFeeds] = useLocalStorage<ReadonlyArray<IBlogFeed>>(
    'blog',
    []
  )
  const { t } = useTranslation()

  React.useEffect(() => {
    fetch(
      'https://wudix076af.execute-api.ap-northeast-1.amazonaws.com/Prod/feed'
    )
      .then((res) => res.json())
      .then((body) => setFeeds(body.data))
  }, [])

  return (
    <article className="history">
      <h4>{t('navigation.blog')}</h4>
      <hr />
      <ul className="list-unstyled">
        {createHistoryItems(
          feeds.map((feed) => ({
            date: new Date(feed.published),
            title: feed.title,
            url: feed.link,
          }))
        )}
      </ul>
    </article>
  )
}
