import * as React from 'react'
import { useTranslation } from 'react-i18next'

export const FormatDate: React.FC<{ date: Date }> = ({ date }) => {
  const { t } = useTranslation()
  return (
    <>
      {t('datetime', {
        datetime: date,
        formatParams: {
          datetime: { year: 'numeric', month: '2-digit', day: '2-digit' },
        },
      })}
    </>
  )
}
