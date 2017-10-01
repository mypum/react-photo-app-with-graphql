import PropTypes from 'prop-types'
import React from 'react'

function UserInfo ({info: { fullname, userPicUrl, city, country }}) {
  return (
    <div className="PhotoUserInfo">
      <div className="frame">
        <img src={userPicUrl} />
      </div>
      <div className="UserInfo">
        <h3 className="name">{fullname}</h3>
        <p>{city}{city !== '' && ','} {country}</p>
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
  })
}

export default UserInfo
