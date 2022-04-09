import { withPrefix } from 'gatsby-link'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Table } from 'reactstrap'
import Layout from '../components/layout'

export default () => {
  const { t } = useTranslation()
  const questions = [...Array(18).keys()].map((num: number) => {
    const key = num < 9 ? '0' + (num + 1) : num + 1
    return (
      <tr key={key}>
        <td>
          <img src={withPrefix(`math/toi${key}.png`)} />
        </td>
        <td className="align-middle">
          <a href={withPrefix(`math/ans${key}.pdf`)}>{t('math.answer')}</a>
        </td>
      </tr>
    )
  })
  return (
    <Layout>
      <h4>{t('math.kingdom')}</h4>
      <p>{t('math.kingdom.message')}</p>
      <Table bordered>
        <tbody>{questions}</tbody>
      </Table>
    </Layout>
  )
}
