import { compose } from 'recompose'

import page from 'hocs/page'

import Homepage from './Homepage'

export default compose(
  page
)(Homepage)
