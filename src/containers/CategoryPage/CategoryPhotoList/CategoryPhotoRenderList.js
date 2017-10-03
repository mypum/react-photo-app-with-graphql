import PropTypes from 'prop-types'
import React from 'react'
import Masonry from 'react-masonry-component'

import withImageLoaded from 'hocs/withImageLoaded'

import CategoryPageItem from '../CategoryPageItem/CategoryPageItem'

function CategoryPhotoRenderList ({data, catLoaded}) {
  if (catLoaded === true) {
    return (
      <div>
        <Masonry>
          {data.map(photo => (
            <div key={`photo_item_${photo.id}`} className="col md-4 catItem">
              <CategoryPageItem data={photo} />
            </div>
          ))}
        </Masonry>
        <style jsx>{`
          .catItem {
            padding: 5px;
          }
        `}</style>
      </div>
    )
  }

  return (
    <div>
      <div className="row">
        {data.map(photo => (
          <div key={`photo_item_${photo.id}`} className="col md-4 catItem">
            <CategoryPageItem data={photo} />
          </div>
        ))}
      </div>
      <style jsx>{`
        .catItem {
          padding: 5px;
        }
      `}</style>
    </div>
  )
}

CategoryPhotoRenderList.propTypes = {
  data: PropTypes.array,
  catLoaded: PropTypes.bool
}

export default withImageLoaded('.catItem', 'catLoaded')(CategoryPhotoRenderList)
