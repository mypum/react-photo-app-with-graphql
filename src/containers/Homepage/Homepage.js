import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import slugify from 'utils/slugify'

import RectanglePost from 'components/common/RectanglePost/RectanglePost'

import { percentage } from 'utils/style'
import config from 'utils/style/_config'

function Homepage (props) {
  const CategoryPhotos = ['abstract', 'animal', 'black and white', 'celebrity', 'cityscape', 'advert', 'concert', 'family', 'fashion', 'cinema', 'art', 'food', 'journalism', 'landscape', 'nature']

  return (
    <div className="HomeContainer">
      <div className="HomeSidebar">
        HomeSidebar
      </div>
      <div className="HomeContent">
        <div className="HomeContentRow">
          {
            CategoryPhotos.map(cat => {
              return (
                <div className="HomeContentColumn">
                  <RectanglePost
                    title={cat}
                    imgUrl={'https://drscdn.500px.org/photo/229768723/w%3D440_h%3D440/v2?client_application_id=42625&webp=true&v=0&sig=a2051947f49d40f88753a5e4caf151ce029baddc462d288ed3ebe4a27007792f'}
                  />
                </div>
              )
            })
          }
        </div>
      </div>
      <style jsx>{`
        .HomeContainer {
          display: flex;
          height: 100vh;
        }

        .HomeSidebar {
          flex: 1 0 300px;
          max-width: 300px;
          background-color: #111;
        }

        .HomeContent {
          flex-grow: 1;
        }

        .HomeContentRow {
          height: 100%;
          display: flex;
          flex-wrap: wrap;
        }

        .HomeContentColumn {
          flex: 1 0 ${percentage(1 / 5)}
        }
      `}</style>
    </div>
  )
}

Homepage.propTypes = {
}

export default Homepage
