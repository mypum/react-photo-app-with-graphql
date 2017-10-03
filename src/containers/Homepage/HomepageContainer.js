import { compose } from 'recompose'

import page from 'hocs/page'

import Homepage from './Homepage'

import withCategoryRecomended from './hocs/withCategoryRecomended'

export default compose(
  page,
  withCategoryRecomended
)(Homepage)
