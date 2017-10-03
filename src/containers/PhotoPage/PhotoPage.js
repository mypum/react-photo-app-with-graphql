import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import { color } from 'utils/style/_config'

import PhotoViewer from './PhotoViewer/PhotoViewer'
import PhotoInfo from './PhotoInfo/PhotoInfo'
import PhotoUserInfo from 'components/common/UserInfo/UserInfo'
import PhotoDetail from './PhotoDetail/PhotoDetail'

function PhotoPage (props) {
  const {
    data: {
      loading,
      photo
    }
  } = props

  if (!loading) {
    return (
      <div className="PhotoPage">

        <Helmet>
          <title>{photo.name} by {photo.user.fullname}</title>
          <body className="isPhotoPage" />
        </Helmet>

        <PhotoViewer
          src={photo.imageUrl.full}
          title={photo.name}
        />
        <div className="sidebar">
          <div className="sidebarBox">
            <PhotoUserInfo info={photo.user} />
          </div>
          <div className="sidebarBox">
            <div className="photoContent">
              <h1 className="photoTitle">{photo.name}</h1>
              {
                (photo.description !== '') &&
                <p className="photoDesc" dangerouslySetInnerHTML={{__html: photo.description}} />
              }
            </div>
          </div>
          <div className="sidebarBox">
            <PhotoInfo data={photo} />
          </div>
          <div className="sidebarBox">
            <PhotoDetail data={photo} />
          </div>
        </div>
        <style jsx>{`
          .PhotoPage {
            display: flex;
            height: 100vh;
            border-top: 1px solid #111;
          }

          .sidebarBox {
            border-bottom: 1px solid #222;
            padding: 10px 30px;
          }

          .sidebar {
            flex: 1 0 350px;
            max-width: 350px;
            padding: 10px 0;
            background: #000;
          }

          .photoTitle {
            font-size: 22px;
            margin-bottom: 10px;
            color: ${color.primary}
          }

          .photoDesc :global(a) {
            color: #aaa;
          }

          .photoDesc :global(a:hover) {
            text-decoration: underline;
          }
        `}</style>
      </div>
    )
  }
  return null
}

PhotoPage.propTypes = {
  data: PropTypes.object
}

export default PhotoPage
