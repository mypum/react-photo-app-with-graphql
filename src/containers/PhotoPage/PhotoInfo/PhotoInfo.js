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
      { !!camera && <h2>{camera}</h2> }
      { !!lens && <h3>{lens}</h3> }
      <ul>
        { !!aperture && <li>F{aperture}</li> }
        { !!focalLength && <li>{focalLength}mm</li> }
        { !!shutterSpeed && <li>{shutterSpeed}s</li> }
        { !!iso && <li>iso {iso}</li> }
      </ul>
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
