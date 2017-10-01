import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import PhotoInfo from './PhotoInfo/PhotoInfo'
import PhotoUserInfo from 'components/common/UserInfo/UserInfo'
import PhotoDetail from './PhotoDetail/PhotoDetail'

function PhotoPage (props) {
  const {
    data: {
      loading,
      error,
      photo
    }
  } = props

  if (!loading) {
    return (
      <div className="PhotoPage">
        <div className="viewer">
          <img src={photo.imageUrl.full} />
        </div>
        <div className="sidebar">
          <PhotoUserInfo info={photo.user} />
          <div className="photoContent">
            <h1 className="photoTitle">{photo.name}</h1>
            {
              (photo.description !== '') &&
              <p className="photoDesc" dangerouslySetInnerHTML={{__html: photo.description}} />
            }
          </div>
          <PhotoInfo data={photo} />
          <PhotoDetail data={photo} />
        </div>
        <style jsx>{`
          .PhotoPage {
            display: flex;
            height: 100vh;
          }
          .viewer {
            flex-grow: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100%;
          }
          .viewer img {
            max-height: 100%;
          }
          .sidebar {
            flex: 1 0 350px;
            max-width: 350px;
            padding: 15px;
            background: #000;
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
