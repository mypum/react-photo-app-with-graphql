import { compose } from 'recompose'
import { graphql } from 'react-apollo'

import page from 'hocs/page'

import CategoryPage from './CategoryPage'
import ALL_PHOTOS_QUERY from 'graph/category/AllPhotos.graphql'

export default compose(
  page,
  graphql(ALL_PHOTOS_QUERY)
)(CategoryPage)
