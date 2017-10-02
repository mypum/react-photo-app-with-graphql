import PropTypes from 'prop-types'
import React from 'react'

import cx from 'classnames'

function UserInfo (props) {
  const {
    info: {
      fullname,
      userPicUrl,
      city,
      country
    },
    size = 'large'
  } = props

  const containerClass = cx({
    PhotoUserInfo: true,
    [size]: true
  })

  return (
    <div className={containerClass}>
      <div className="frame">
        <img src={userPicUrl} />
      </div>
      <div className="UserInfo">
        <h3 className="name">{fullname}</h3>
        { (size === 'large') && <p>{city}{city !== '' && ','} {country}</p>}
      </div>
      <style jsx>{`
        .PhotoUserInfo {
          display: flex;
        }
        .frame {
          flex: 1 0 60px;
          max-width: 60px;
          margin-right: 15px;
          border-radius: 50%;
          overflow: hidden;
        }
        .frame img {
          width: 100%;
          border-radius: 50%;
        }

        .PhotoUserInfo.small .frame {
          flex: 1 0 35px;
          max-width: 35px;
          margin-right: 10px;
        }
        .PhotoUserInfo.small .UserInfo {
          display: flex;
          align-items: center;
          font-size: 13px;
        }
        .PhotoUserInfo.small .name {
          text-overflow: ellipsis;
          white-space: nowrap;
          overflow: hidden;
        }
      `}</style>
    </div>
  )
}
UserInfo.propTypes = {
  info: PropTypes.shape({
    fullname: PropTypes.string.isRequired,
    userPicUrl: PropTypes.string.isRequired,
    city: PropTypes.string,
    country: PropTypes.string
  }),
  size: PropTypes.string
}

export default UserInfo
