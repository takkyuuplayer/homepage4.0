import * as React from 'react'
import Dropdown from 'react-bootstrap/Dropdown'
import { useTranslation } from 'react-i18next'

const LocaleSelector = () => {
  const { t, i18n } = useTranslation()
  return (
    <Dropdown>
      <Dropdown.Toggle>{t('common.current_locale')}</Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item onClick={() => i18n.changeLanguage('ja')}>
          日本語
        </Dropdown.Item>
        <Dropdown.Item onClick={() => i18n.changeLanguage('en')}>
          English
        </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default LocaleSelector
