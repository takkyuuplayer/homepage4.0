import i18next from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import loc from './locales.json'

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: loc,
    fallbackLng: 'ja',
    interpolation: {
      escapeValue: false,
    },
  })

export default i18next
