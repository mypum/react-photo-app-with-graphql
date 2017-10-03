import { compose } from 'recompose'
import { graphql } from 'react-apollo'
import camelcase from 'camelcase'
import page from 'hocs/page'

import CategoryPage from './CategoryPage'

import withCommonLayout from 'hocs/withCommonLayout'

import ALL_PHOTOS_QUERY from 'graph/category/AllPhotos.graphql'

export default compose(
  page,
  withCommonLayout(),
  graphql(ALL_PHOTOS_QUERY, {
    options: ({ url: { query: { slug } } }) => ({
      variables: {
        category: camelcase(slug)
      }
    })
  })
)(CategoryPage)
