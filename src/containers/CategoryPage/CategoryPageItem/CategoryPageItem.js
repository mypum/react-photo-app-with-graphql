import { Link } from 'server/routes'
import PropTypes from 'prop-types'
import React from 'react'
import slugify from 'utils/slugify'

import UserInfo from 'components/common/UserInfo/UserInfo'
import mapCategory from 'utils/mapCategory'
import { color } from 'utils/style/_config'

function CategoryPageItem (props) {
  const {
    data: {
      id,
      name,
      imageUrl,
      rating,
      category,
      user
    }
  } = props

  return (
    <div className="CategoryPageItem">
      <Link prefetch route={'photo'} params={{
        id: id,
        slug: slugify(name),
        category: slugify(mapCategory(category))
      }}>
        <a>
          <img src={imageUrl.medium} />
          <div className="rating">
            <span className="ratingLabel">pulse</span>
            <span className="ratingPoint">{rating}</span>
          </div>
          <div className="detail">
            <UserInfo info={user} size="small" />
          </div>
        </a>
      </Link>
      <style jsx>{`
        .CategoryPageItem {
          position: relative;
          overflow: hidden;
          font-size: 0;
        }
        .CategoryPageItem :global(a) {
          color: #fff;
        }
        .detail {
          height: 55px;
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 10px;
          background: linear-gradient(to bottom, rgba(0,0,0,0) 0%,rgba(0,0,0,0.32) 40%,rgba(0,0,0,0.8) 100%);
          transform: translateY(55px);
          transition: transform 0.2s ease-in-out, opacity 0.4s ease-in-out;
          opacity: 0;
        }

        .CategoryPageItem:hover .detail {
          transform: translateY(0);
          opacity: 1;
        }

        .rating {
          position: absolute;
          top: 0;
          right: 0;
          font-size: 14px;
          text-align: center;
          line-height: 1.2;
          padding: 5px 5px 10px 10px;
          background: rgba(0,0,0, 0.4);
          width: 80px;
          height: 68px;
          transform: translateY(-68px);
          transition: transform 0.2s ease-in-out, opacity 0.4s ease-in-out;
          opacity: 0;
        }
        .ratingLabel {
          color: ${color.primary}
        }
        .ratingPoint {
          display: block;
          font-size: 32px;
        }

        .CategoryPageItem:hover .rating {
          transform: translateY(0);
          opacity: 1;
        }

      `}</style>
    </div>
  )
}
CategoryPageItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    category: PropTypes.number,
    imageUrl: PropTypes.shape({
      medium: PropTypes.string
    }),
    user: PropTypes.shape({
      fullname: PropTypes.string,
      userPicUrl: PropTypes.string
    })
  })
}

export default CategoryPageItem
