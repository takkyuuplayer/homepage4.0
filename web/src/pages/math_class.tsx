import { withPrefix } from 'gatsby-link'
import * as React from 'react'
import { useTranslation } from 'react-i18next'
import Layout from '../components/layout'

export default () => {
  const { t } = useTranslation()
  return (
    <Layout>
      <h4>{t('math.class')}</h4>
      <ul>
        <li>
          <a href={withPrefix(`math/lec_yogen.pdf`)}>第一余弦定理</a>
        </li>
        <li>
          <a href={withPrefix(`math/lec_kansu.pdf`)}>関数の対称点移動</a>
        </li>
        <li>
          <a href={withPrefix(`math/lec_circle.pdf`)}>円に内接する四角形</a>
        </li>
        <li>
          <a href={withPrefix(`math/lec_senkei.pdf`)}>固有ベクトル</a>
        </li>
      </ul>
    </Layout>
  )
}
