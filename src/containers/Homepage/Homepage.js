import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import slugify from 'utils/slugify'

import RectanglePost from 'components/common/RectanglePost/RectanglePost'
import HomepageSidebar from './Sidebar/HomepageSidebar'

import { percentage } from 'utils/style'

function Homepage ({CategoryPhotos}) {
  return (
    <div className="HomeContainer">
      <HomepageSidebar />
      <div className="HomeContent">
        <div className="HomeContentRow">
          {
            CategoryPhotos.map(({catName, catID, coverImg}, index) => {
              return (
                <div key={`${index}`} className="HomeContentColumn">
                  <Link prefetch route={'category'} params={{slug: slugify(catName)}}>
                    <a>
                      <RectanglePost
                        title={catName}
                        imgUrl={coverImg}
                      />
                    </a>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
      <style jsx>{`
        .HomeContainer {
          display: flex;
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
          flex: 1 0 ${percentage(1 / 4)}
        }

        @media (min-height: 960px) {
          .HomeContentColumn {
            flex: 1 0 ${percentage(3 / 12)}
          }
        }

      `}</style>
    </div>
  )
}

Homepage.propTypes = {
  CategoryPhotos: PropTypes.array
}

export default Homepage
