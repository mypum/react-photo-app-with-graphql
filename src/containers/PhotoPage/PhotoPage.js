import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'

import { color } from 'utils/style/_config'

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
        <Helmet>
          <title>{photo.name} by {photo.user.fullname}</title>
        </Helmet>
        <div className="viewer">
          <img src={photo.imageUrl.full} />
        </div>
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
  return <div>loading...</div>
}
PhotoPage.propTypes = {
}

export default PhotoPage
