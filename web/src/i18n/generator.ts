interface IRow {
  category: string
  key: string
  [propName: string]: string
}
interface II18n {
  [locale: string]: {
    translation: {
      [key: string]: string
    }
  }
}

const getLocales = (header: string[]) =>
  header
    .filter((word) => word !== 'category' && word !== 'key')
    .filter((word) => /^[a-z]{2}(_[A-Z]{2})?$/.test(word))

const rowToJSON = (row: IRow, locales: string[]) =>
  locales.reduce((ret: II18n, locale) => {
    ret[locale] = {
      translation: {
        [`${row.category}.${row.key}`]: row[locale],
      },
    }
    return ret
  }, {})

const mergeI18n = (sources: II18n[]): II18n => {
  const merged: II18n = {}
  for (const source of sources) {
    for (const [locale, { translation }] of Object.entries(source)) {
      merged[locale] = {
        translation: { ...merged[locale]?.translation, ...translation },
      }
    }
  }
  return merged
}

const tsvToI18n = (tsv: string) => {
  const rows = tsv.split('\n').map((line: string) => line.trim().split('\t'))
  const header = rows.shift()
  const locales = getLocales(header)

  return mergeI18n([
    ...rows.map((row) =>
      rowToJSON(
        Object.fromEntries(
          header.map((key, index) => [key, row[index]])
        ) as IRow,
        locales
      )
    ),
    ...locales.map((locale) => ({
      [locale]: {
        translation: {
          datetime: '{{datetime, datetime}}',
        },
      },
    })),
  ])
}

export default { getLocales, rowToJSON, tsvToI18n }
