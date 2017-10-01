import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import slugify from 'utils/slugify'

import RectanglePost from 'components/common/RectanglePost/RectanglePost'

import { percentage } from 'utils/style'
import config from 'utils/style/_config'

function Homepage (props) {
  const CategoryPhotos = ['abstract', 'animal', 'black and white', 'celebrity', 'cityscape', 'advert', 'concert', 'family', 'fashion', 'cinema', 'art', 'food', 'journalism', 'landscape', 'marcro', 'nature']

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
                  <RectanglePost title={cat} />
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
          flex: 1 0 ${percentage(3 / 12)}
        }
      `}</style>
    </div>
  )
}

Homepage.propTypes = {
}

export default Homepage
