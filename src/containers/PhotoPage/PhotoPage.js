import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

function PhotoPage (props) {
  const {
    data: {
      loading,
      error,
      photo
    }
  } = props

  if (!loading) {
    console.log(props)
    return (
      <div>
        <Helmet>
          <title>{photo.name} Photo</title>
        </Helmet>
        <Link prefetch route="/">
          <a>Homepage</a>
        </Link>
        <h1>{photo.name}</h1>
        { (photo.description !== '') && <p dangerouslySetInnerHTML={{__html: photo.description}} />}
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
