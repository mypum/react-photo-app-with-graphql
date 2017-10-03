import PropTypes from 'prop-types'
import React from 'react'

function PhotoInfo (props) {
  const {
    data: {
      camera,
      lens,
      aperture,
      focalLength,
      shutterSpeed,
      iso
    }
  } = props

  return (
    <div className="photoInfo">
      <div className="cameraInfo">
        { !!camera && <h2>{camera}</h2> }
        { !!lens && <h3>Lens: {lens}</h3> }
      </div>
      <ul>
        { !!aperture && <li><img className="icon" src="/static/images/aperture-icon.png" /><span>ƒ/{aperture}</span></li> }
        { !!focalLength && <li><img className="icon" src="/static/images/focuslength-icon.png" /><span>{focalLength}mm</span></li>}
        { !!shutterSpeed && <li><img className="icon" src="/static/images/speedshutter-icon.png" /><span>{shutterSpeed}s</span></li> }
        { !!iso && <li><img className="icon" src="/static/images/iso-icon.png" /><span>{iso}</span></li> }
      </ul>
      <style jsx>{`
        .cameraInfo {
          margin-bottom: 15px;
        }
        h2 {
          font-size: 18px;
          margin-bottom: 5px;
        }
        .icon {
          width: 25px;
          height: auto;
          margin-right: 15px;
        }
        li {
          height: 30px;
          display: flex;
          align-items: center;
          align-content: flex-start;
          margin-bottom: 10px;
        }
        li span {
          font-size: 16px;
        }
      `}</style>
    </div>
  )
}

PhotoInfo.propTypes = {
  data: PropTypes.shape({
    camera: PropTypes.string,
    lens: PropTypes.string,
    aperture: PropTypes.string,
    focalLength: PropTypes.string,
    shutterSpeed: PropTypes.string,
    iso: PropTypes.string
  })
}

export default PhotoInfo
