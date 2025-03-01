import * as React from 'react'
import { useTranslation } from 'react-i18next'
import useSWR from 'swr'
import createHistoryItems from './HistoryItems'

interface IBlogFeed {
  title: string
  link: string
  published: string
  [attr: string]: string
}

const fetcher = (url: string) =>
  fetch(url)
    .then((res) => res.json())
    .then((res) => res.data)

export default () => {
  const { t } = useTranslation()

  return (
    <article className="history">
      <h4>{t('navigation.blog')}</h4>
      <hr />
      <ul className="list-unstyled">
        <BlogEntries />
      </ul>
    </article>
  )
}

const BlogEntries = () => {
  const { t } = useTranslation()
  const { data: feeds, error } = useSWR<ReadonlyArray<IBlogFeed>>(
    'https://mkbe305n1f.execute-api.ap-northeast-1.amazonaws.com/prod/feed',
    fetcher
  )

  if (error) return <li>{t('Failed to load')}</li>
  if (!feeds) return <li>{t('Loading...')}</li>

  return createHistoryItems(
    feeds.map((feed) => ({
      date: new Date(feed.published),
      title: feed.title,
      url: feed.link,
    }))
  )
}
