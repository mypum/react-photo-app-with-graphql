import { compose } from 'recompose'

import withData from './withData'
import withStyle from './withStyle'
import withProgressBar from './withProgressBar'

export default compose(
  withData,
  withStyle,
  withProgressBar
)
