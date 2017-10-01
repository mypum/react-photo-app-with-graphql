import PropTypes from 'prop-types'
import React, { Component } from 'react'

import Masonry from 'react-masonry-component'
import CategoryPageItem from '../CategoryPageItem/CategoryPageItem'

class CategoryPhotoList extends Component {
  render () {
    const {
      data
    } = this.props

    return (
      <div>
        <Masonry>
          {data.map(photo => (
            <div key={`photo_item_${photo.id}`} className="col md-3 catItem">
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
}

CategoryPhotoList.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number
  })
}

export default CategoryPhotoList
