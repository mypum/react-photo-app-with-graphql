import PropTypes from 'prop-types'
import React from 'react'

function RectanglePost (props) {
  const {
    title,
    imgUrl
  } = props

  return (
    <div className="RectanglePost">
      <div className="content">
        <h2 className="title">{title}</h2>
      </div>
      <div className="imgFrame">
        <img src={imgUrl} />
      </div>

      <style jsx>{`
        .RectanglePost {
          position: relative;
        }
        .imgFrame {
          position: relative;
          background: #eee;
        }
        .imgFrame:before {
          content: '';
          display: block;
          padding-bottom: 100%;
        }
        .imgFrame img {
          position: absolute;
          width: 100%;
          height: 100%;
          left: 0;
          right: 0;
          bottom: 0;
        }
        img {
          max-width: 100%;
          filter: grayscale(0.8);
          transition: filter 0.4s ease;
        }
        .content {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          background: rgba(0,0,0,0.4);
          border: 10px solid transparent;
          transition: background 0.4s ease, border 0.4s ease;
        }
        .title {
          font-size: 16px;
          color: #fff;
          font-weight: 700;
          text-transform: uppercase;
        }
        .RectanglePost:hover .content {
          background: transparent;
          border: 10px solid rgba(201, 173, 102, 0.6);
        }
        .RectanglePost:hover img {
          filter: grayscale(0);
        }
      `}</style>
    </div>
  )
}
RectanglePost.propTypes = {
  title: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired
}

export default RectanglePost
