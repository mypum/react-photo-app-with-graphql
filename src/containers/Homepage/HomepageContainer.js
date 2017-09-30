import { compose } from 'recompose'
import { gql, graphql } from 'react-apollo'

import page from 'hocs/page'

import Homepage from './Homepage'
import ALL_PHOTOS_QUERY from 'graph/homepage/AllPhotos.graphql'

export default compose(
  page,
  graphql(ALL_PHOTOS_QUERY)
)(Homepage)
