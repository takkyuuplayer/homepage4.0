import * as React from 'react'
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux'
import {
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  UncontrolledDropdown,
} from 'reactstrap'
import { RootActions } from '../ducks'
import { setLocale } from '../ducks/i18n'

interface ILocaleSelector {
  onSetLocale: (locale: string) => any
}

const LocaleSelector: React.SFC<ILocaleSelector> = ({ onSetLocale }) => (
  <UncontrolledDropdown nav inNavbar>
    <DropdownToggle nav caret>
      <FormattedMessage id="common.current_locale" />
    </DropdownToggle>
    <DropdownMenu right>
      <DropdownItem onClick={() => onSetLocale('ja')}>日本語</DropdownItem>
      <DropdownItem onClick={() => onSetLocale('en')}>English</DropdownItem>
    </DropdownMenu>
  </UncontrolledDropdown>
)

export default connect(undefined, (dispatch: (action: RootActions) => any) => ({
  onSetLocale: (locale: string) => dispatch(setLocale(locale)),
}))(LocaleSelector)
