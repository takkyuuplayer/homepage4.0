import * as React from 'react'
import NavDropdown from 'react-bootstrap/NavDropdown'
import { useTranslation } from 'react-i18next'

const LocaleSelector = () => {
  const { t, i18n } = useTranslation()
  return (
    <NavDropdown title={t('common.current_locale')}>
      <NavDropdown.Item onClick={() => i18n.changeLanguage('ja')}>
        日本語
      </NavDropdown.Item>
      <NavDropdown.Item onClick={() => i18n.changeLanguage('en')}>
        English
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default LocaleSelector
