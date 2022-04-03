import Generator from './generator'

describe('i18n/generator', () => {
  describe('getLocales()', () => {
    it('parses header and returns locales', () => {
      const header = ['category', 'key', 'ja', 'en']
      expect(Generator.getLocales(header)).toStrictEqual(['ja', 'en'])
    })
    it('returns empty array if no locales found', () => {
      const header = ['category', 'key']
      expect(Generator.getLocales(header)).toStrictEqual([])
    })
  })
  describe('rowToJSON()', () => {
    it('converts row to JSON', () => {
      const row = {
        category: 'c1',
        en: 'English',
        ja: 'Japanese',
        key: 'language',
      }
      expect(Generator.rowToJSON(row, ['en', 'ja'])).toStrictEqual({
        en: { translation: { 'c1.language': 'English' } },
        ja: { translation: { 'c1.language': 'Japanese' } },
      })
    })
    it('handles undefined locales', () => {
      const row = {
        category: 'c1',
        ja: 'Japanese',
        key: 'language',
      }
      expect(Generator.rowToJSON(row, ['en', 'ja'])).toStrictEqual({
        en: { translation: { 'c1.language': undefined } },
        ja: { translation: { 'c1.language': 'Japanese' } },
      })
    })
  })
  describe('tsvToI18n()', () => {
    it('converts tsv to locale json', () => {
      const tsv = `category\tkey\tja_JP\ten_US\nc\tk\tあ\ta`
      expect(Generator.tsvToI18n(tsv)).toStrictEqual({
        en_US: {
          translation: { 'c.k': 'a', datetime: '{{datetime, datetime}}' },
        },
        ja_JP: {
          translation: { 'c.k': 'あ', datetime: '{{datetime, datetime}}' },
        },
      })
    })
  })
})
