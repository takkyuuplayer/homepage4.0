import { intlReducer, updateIntl } from 'react-intl-redux'
import loc from '../i18n/locales.json'

interface ILocale {
  [lang: string]: {
    [key: string]: string
  }
}

const locales = loc as ILocale

const defaultLocale = 'ja'
const initialState = {
  locale: defaultLocale,
  messages: locales[defaultLocale],
}

export const setLocale = (locale: string) =>
  updateIntl({
    locale,
    messages: locales[locale],
  })

export const setLocaleByBrowserLanguages = (
  languages: ReadonlyArray<string>
) => {
  const shortLanguage = []
  for (const locale of languages) {
    if (locales.hasOwnProperty(locale)) {
      return setLocale(locale)
    }
    shortLanguage.push(locale.substr(0, 2))
  }
  for (const locale of shortLanguage) {
    if (locales.hasOwnProperty(locale)) {
      return setLocale(locale)
    }
  }

  return setLocale(defaultLocale)
}

type IntlState = ReturnType<typeof intlReducer>
type IntlAction = ReturnType<typeof updateIntl>

export default (
  state: IntlState = initialState,
  action: IntlAction
): IntlState => intlReducer(state, action)
