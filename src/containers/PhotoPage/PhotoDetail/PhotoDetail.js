import PropTypes from 'prop-types'
import React from 'react'

import { Link } from 'server/routes'
import dateFormat from 'utils/dateFormat'
import mapCategory from 'utils/mapCategory'

function PhotoDetail ({data: {category, takenAt, createdAt}}) {
  return (
    <div>
      <ul>
        <li>
          <span>Category:</span>
          <Link prefetch route={'category'}>
            <a>{ mapCategory(category) }</a>
          </Link>
        </li>
        {
          (!takenAt) &&
          <li>
            <span>Taken:</span>
            <time dateTime={createdAt}>{ dateFormat(takenAt) }</time>
          </li>
        }
        <li>
          <span>Uploaded:</span>
          <time dateTime={createdAt}>{ dateFormat(createdAt) }</time>
        </li>
      </ul>
      <style jsx>{`
        span {
          display: inline-block;
          width: 100px;
        }
      `}</style>
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
