import PropTypes from 'prop-types'
import React from 'react'

import dateFormat from 'utils/dateFormat'
import mapCategory from 'utils/mapCategory'

function PhotoDetail ({data: {category, takenAt, createdAt}}) {
  return (
    <div>
      <ul>
        <li>Category: { mapCategory(category) }</li>
        { (!takenAt) && <li>Taken: { dateFormat(takenAt) }</li>}
        <li>Uploaded: { dateFormat(createdAt) }</li>
      </ul>
    </div>
  )
}
PhotoDetail.propTypes = {
  data: PropTypes.shape({
    category: PropTypes.string,
    takenAt: PropTypes.string,
    createdAt: PropTypes.string
  })
}

export default PhotoDetail
