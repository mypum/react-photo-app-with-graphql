import { Link } from 'server/routes'

import PropTypes from 'prop-types'
import React from 'react'

function PhotoPage (props) {
  const {
    data: {
      loading,
      error,
      photo
    }
  } = props

  if(!loading) {
    return (
      <div>
        <Link prefetch route="/">
          <a>Homepage</a>
        </Link>
        <h1>{photo.name}</h1>
        <div>views: {photo.timesViewed}</div>
        <img src={photo.imageUrl.medium} />
        <style jsx>{`
          li {
            background: #eee;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    )
  }
  return <div>loading...</div>
}
PhotoPage.propTypes = {
}

export default PhotoPage
