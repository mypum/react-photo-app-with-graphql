import PropTypes from 'prop-types'
import React from 'react'
import Lightbox from 'react-image-lightbox'
import { compose, withState, withHandlers } from 'recompose'

function PhotoViwer ({src, title, onClickImage, onCloseLightbox, showLightBox}) {
  return (
    <div className="PhotoViwer">
      <div className="viewer">
        <img onClick={onClickImage} src={src} />
      </div>
      {
        showLightBox &&
        <Lightbox
          mainSrc={src}
          onCloseRequest={onCloseLightbox}
          imageTitle={title}
        />
      }
      <style jsx>{`
        .PhotoViwer {
          flex-grow: 1;
        }
        .viewer {
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100%;
        }

        .viewer img {
          max-height: 100%;
          cursor: pointer;
        }
      `}</style>
    </div>
  )
}
PhotoViwer.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  onClickImage: PropTypes.func,
  onCloseLightbox: PropTypes.func,
  showLightBox: PropTypes.bool
}

export default compose(
  withState('showLightBox', 'setShowLightBox', false),
  withHandlers({
    onClickImage: ({setShowLightBox}) => e => {
      setShowLightBox(true)
    },
    onCloseLightbox: ({setShowLightBox}) => e => {
      setShowLightBox(false)
    }
  })
)(PhotoViwer)
