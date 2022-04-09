import { program } from 'commander'
import * as fs from 'fs'
import Generator from '../src/i18n/generator'

program
  .option('--in <tsv path>')
  .option('--out <json path>')
  .action((options) => {
    const tsv = fs.readFileSync(options.in, 'utf8')
    const i18nJSON = Generator.tsvToI18n(tsv)
    fs.writeFileSync(options.out, JSON.stringify(i18nJSON))
  })

program.parse(process.argv)
