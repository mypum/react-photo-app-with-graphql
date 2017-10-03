import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import CategoryPhotoList from './CategoryPhotoList/CategoryPhotoList'

function CategoryPage (props) {
  const {
    data: {
      error,
      photos
    }
  } = props

  if (error) return <div>erorr loading</div>
  if (photos && photos.length) {
    return (
      <div>
        <Helmet>
          <title>React 500px with Apollo & GraphQL</title>
        </Helmet>

        <CategoryPhotoList data={photos} />

        <style jsx>{`
          li {
            background: #eee;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    )
  }
  return <div>Loading</div>
}
CategoryPage.propTypes = {
  data: PropTypes.object
}

export default CategoryPage
