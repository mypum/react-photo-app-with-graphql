import PropTypes from 'prop-types'
import React from 'react'

function PhotoInfo (props) {
  const {
    data: {
      camera,
      lens,
      aperture,
      focusLength,
      shutterSpeed,
      iso
    }
  } = props

  return (
    <div className="photoInfo">
      { !!camera && <h2>{camera}</h2> }
      { !!lens && <h3>{lens}</h3> }
      <ul>
        { !!aperture && <li>{aperture}</li> }
        { !!focusLength && <li>{focusLength}</li> }
        { !!shutterSpeed && <li>{shutterSpeed}</li> }
        { !!iso && <li>{iso}</li> }
      </ul>
    </div>
  )
}

PhotoInfo.propTypes = {
  data: PropTypes.shape({
    camera: PropTypes.string,
    lens: PropTypes.string,
    aperture: PropTypes.string,
    focusLength: PropTypes.string,
    shutterSpeed: PropTypes.string,
    iso: PropTypes.string
  })
}

export default PhotoInfo
