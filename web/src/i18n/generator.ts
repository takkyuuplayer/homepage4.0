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

class Generator {
  public static getLocales = (header: string[]) =>
    header
      .filter((word) => word !== 'category' && word !== 'key')
      .filter((word) => /^[a-z]{2}(_[A-Z]{2})?$/.test(word))
  public static rowToJSON = (row: IRow, locales: string[]) =>
    locales.reduce((ret: II18n, locale) => {
      ret[locale] = {
        translation: {
          [`${row.category}.${row.key}`]: row[locale],
        },
      }
      return ret
    }, {})
  public static tsvToI18n(tsv: string) {
    const rows = tsv.split('\n').map((line: string) => line.trim().split('\t'))
    const header = rows.shift()
    const locales = Generator.getLocales(header)

    return Object.assign(
      {},
      ...rows.map((row) =>
        Generator.rowToJSON(Object.fromEntries(header.map((key, index) => [key, row[index]])) as IRow, locales)
      ),
      ...locales.map((locale) => ({
        [locale]: {
          translation: {
            datetime: '{{datetime, datetime}}',
          },
        },
      }))
    )
  }
}

export default Generator
