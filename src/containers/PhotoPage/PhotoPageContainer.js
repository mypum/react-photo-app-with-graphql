import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import page from 'hocs/page'
import PhotoPage from './PhotoPage'
import withCommonLayout from 'hocs/withCommonLayout'
import PHOTO_QUERY from 'graph/photo/photo.graphql'

export default compose(
  page,
  withCommonLayout({
    showHeader: true,
    showFooter: false,
    stickyHeader: false
  }),
  graphql(PHOTO_QUERY, {
    options: ({ url: { query: { id } } }) => ({
      variables: {
        id
      }
    })
  })
)(PhotoPage)
