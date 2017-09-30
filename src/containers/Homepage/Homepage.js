import { Link } from 'server/routes'

import PropTypes from 'prop-types'
import React from 'react'

function Homepage ({data: { loading, error, photos }}) {
  if (error) return <div>erorr loading</div>
  if(photos && photos.length) {
    return (
      <div>
        <h1>Homepage</h1>
        <ul>
        {
          photos.map(photo => {
            return (
              <li key={`photo_item_${photo.id}`}>
                <Link prefetch route="photo">
                  <img src={photo.imageUrl.small} />
                </Link>
                <div>photo name: {photo.name}</div>
                <div>description: {photo.description}</div>
                <div>by: {photo.user.fullname}</div>
              </li>
            )
          })
        }
        </ul>
        <style jsx>{`
          li {
            background: #eee;
            margin-bottom: 10px;
          }
        `}</style>
      </div>
    )
  }
  return <div>Loading</div>
}
Homepage.propTypes = {
}

export default Homepage
