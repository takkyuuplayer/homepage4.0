import * as React from 'react'
import { useTranslation } from 'react-i18next'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'

const LocaleSelector = () => {
  const { t, i18n } = useTranslation()
  return (
    <UncontrolledDropdown nav inNavbar>
      <DropdownToggle nav caret>
        {t('common.current_locale')}
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem onClick={() => i18n.changeLanguage('ja')}>
          日本語
        </DropdownItem>
        <DropdownItem onClick={() => i18n.changeLanguage('en')}>
          English
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default LocaleSelector
