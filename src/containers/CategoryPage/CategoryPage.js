import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import { Helmet } from 'react-helmet'
import slugify from 'utils/slugify'

function CategoryPage (props) {
  const {
    data: {
      loading,
      error,
      photos
    }
  } = props

  if (error) return <div>erorr loading</div>
  if (photos && photos.length) {
    return (
      <div>
        <Helmet>
          <title>React 500px with Apollo & GraphQL</title>
        </Helmet>

        <h1>Homepage</h1>
        <ul>
          {
            photos.map(photo => {
              return (
                <li key={`photo_item_${photo.id}`}>
                  <Link prefetch route={'photo'} params={{id: photo.id, slug: slugify(photo.name)}} >
                    <a>
                      <img src={photo.imageUrl.small} />
                    </a>
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
CategoryPage.propTypes = {
}

export default CategoryPage
