import { compose } from 'recompose'
import { gql, graphql } from 'react-apollo'

import page from 'hocs/page'

import Homepage from './Homepage'

const ALL_PHOTOS_QUERY = gql`
  query allPhotosQuery {
    photos {
      id,
      name,
      rating,
      lens,
      focalLength,
      iso,
      shutterSpeed,
      aperture,
      timesViewed,
      imageUrl {
        small,
        medium,
        full
      }
      user {
        id,
        fullname,
        userPicUrl
      }
    }
  }
`

export default compose(
  page,
  graphql(ALL_PHOTOS_QUERY)
)(Homepage)
