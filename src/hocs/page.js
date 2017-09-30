import { compose } from 'recompose'

import withData from './withData'
import withStyle from './withStyle'

export default compose(
  withData,
  withStyle
)
