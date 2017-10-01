import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import slugify from 'utils/slugify'

function CategoryPageItem (props) {
  const {
    data: {
      id,
      name,
      description,
      imageUrl,
      user
    }
  } = props

  return (
    <div>
      <Link prefetch route={'photo'} params={{id: id, slug: slugify(name)}} >
        <a>
          <img src={imageUrl.medium} />
        </a>
      </Link>
      <div>photo name: {name}</div>
      <div>description: {description}</div>
      <div>by: {user.fullname}</div>
    </div>
  )
}
CategoryPageItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    imageUrl: PropTypes.shape({
      medium: PropTypes.string
    }),
    user: PropTypes.shape({
      fullname: PropTypes.string
    })
  })
}

export default CategoryPageItem
