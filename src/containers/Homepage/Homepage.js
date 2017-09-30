import { Link } from 'server/routes'

import PropTypes from 'prop-types'
import React from 'react'

function Homepage ({data}) {
  return (
    <div>
      <p>Homepage</p>
      <Link prefetch route="about">
        <a>About</a>
      </Link>
      <ul>
      {
        data.photos.map(photo => {
          return (
            <li key={`photo_item_${photo.id}`}>
              <img src={photo.imageUrl.small} />
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
Homepage.propTypes = {
}

export default Homepage
