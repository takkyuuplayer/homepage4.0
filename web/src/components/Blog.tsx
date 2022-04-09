import * as React from 'react'
import { useTranslation } from 'react-i18next'
import createHistoryItems, { IHistoryItem } from './HistoryItems'

export default () => {
  let initialState: ReadonlyArray<IHistoryItem> = []
  if (typeof localStorage !== 'undefined') {
    initialState = JSON.parse(localStorage.getItem('blog') || '[]')
  }
  const [histories, setHistories] = React.useState(initialState)
  const { t } = useTranslation()

  React.useEffect(() => {
    fetch(
      'https://wudix076af.execute-api.ap-northeast-1.amazonaws.com/Prod/feed'
    )
      .then((res) => res.json())
      .then((body) => {
        setHistories(body.data)
        if (localStorage) {
          localStorage.setItem('blog', JSON.stringify(body.data))
        }
      })
  }, [])

  return (
    <article className="history">
      <h4>{t('navigation.blog')}</h4>
      <hr />
      <ul className="list-unstyled">{createHistoryItems(histories)}</ul>
    </article>
  )
}
