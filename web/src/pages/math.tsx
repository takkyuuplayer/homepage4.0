import { withPrefix } from 'gatsby-link'
import * as React from 'react'
import Table from 'react-bootstrap/Table'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

export default () => {
  const { t } = useTranslation()
  const questions = [...Array(18).keys()].map((num: number) => {
    const key = String(num + 1).padStart(2, '0')
    return (
      <tr key={key}>
        <td>
          <img src={withPrefix(`math/toi${key}.png`)} alt={`Q${key}`} />
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
