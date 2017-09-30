import { compose } from 'recompose'
import { gql, graphql } from 'react-apollo'

import page from 'hocs/page'

import PhotoPage from './PhotoPage'

const PHOTO_QUERY = gql`
{
	photo(id: 229777907) {
    name,
    imageUrl {
      medium
    },
    timesViewed
  }
}
`

export default compose(
  page,
  graphql(PHOTO_QUERY)
)(PhotoPage)
