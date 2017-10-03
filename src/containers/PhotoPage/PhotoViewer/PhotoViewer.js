import PropTypes from 'prop-types'
import React from 'react'
import Lightbox from 'react-image-lightbox'
import { compose, withState, withHandlers } from 'recompose'

import Spinner from 'components/common/Spinner/Spinner'
import withImageLoaded from 'hocs/withImageLoaded'

function PhotoViwer ({src, title, onClickImage, onCloseLightbox, showLightBox, imageLoaded}) {
  console.log('zz', imageLoaded)
  return (
    <div className="PhotoViwer">
      <div className="PhotoViwerWrapper">
        <div className="viewer">
          {
            imageLoaded
              ? <img onClick={onClickImage} src={src} />
              : <div className="loading"><Spinner /></div>
          }
        </div>
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
        .PhotoViwerWrapper {
          height: 100%;
        }
        .viewer {
          position: relative;
          height: 100%;
          width: 100%;
        }

        .viewer img {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          max-height: 100%;
          cursor: zoom-in;
        }
        .loading {
          height: 100%;
          width: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
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
  }),
  withImageLoaded('.viewer', 'imageLoaded')
)(PhotoViwer)
