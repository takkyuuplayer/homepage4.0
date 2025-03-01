import { withPrefix } from 'gatsby-link'
import * as React from 'react'

interface ILogoSize {
  width?: string
  height?: string
}

const Logo: React.FC<ILogoSize> = ({ height = '50px', ...rest }) => (
  <img
    src={withPrefix(`img/logo-white.gif`)}
    alt="Logo"
    height={height}
    {...rest}
  />
)

export default Logo
