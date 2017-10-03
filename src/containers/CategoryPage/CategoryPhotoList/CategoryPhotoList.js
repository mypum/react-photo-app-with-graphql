import PropTypes from 'prop-types'
import React from 'react'

import CategoryPhotoRenderList from './CategoryPhotoRenderList'

function CategoryPhotoList ({data}) {
  return (
    <div>
      <div className="container">
        <CategoryPhotoRenderList data={data} />
      </div>
    </div>
  )
}

CategoryPhotoList.propTypes = {
  data: PropTypes.array
}

export default CategoryPhotoList
