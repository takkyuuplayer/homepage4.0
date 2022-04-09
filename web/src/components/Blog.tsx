import * as React from 'react'
import useLocalStorage from 'use-local-storage'
import { useTranslation } from 'react-i18next'
import createHistoryItems, { IHistoryItem } from './HistoryItems'

export default () => {
  const [histories, setHistories] = useLocalStorage<
    ReadonlyArray<IHistoryItem>
  >('blog', [])
  const { t } = useTranslation()

  React.useEffect(() => {
    fetch(
      'https://wudix076af.execute-api.ap-northeast-1.amazonaws.com/Prod/feed'
    )
      .then((res) => res.json())
      .then((body) => setHistories(body.data))
  }, [])

  return (
    <article className="history">
      <h4>{t('navigation.blog')}</h4>
      <hr />
      <ul className="list-unstyled">{createHistoryItems(histories)}</ul>
    </article>
  )
}
