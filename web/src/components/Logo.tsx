import { withPrefix } from 'gatsby-link'
import * as React from 'react'

interface ILogoSize {
  width?: string
  height?: string
}

const Logo: React.FC<ILogoSize> = (props) => (
  <img src={withPrefix(`img/logo-white.gif`)} alt="Logo" {...props} />
)

Logo.defaultProps = {
  height: '50px',
}

export default Logo
