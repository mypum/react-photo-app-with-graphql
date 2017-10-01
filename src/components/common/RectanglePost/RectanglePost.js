import PropTypes from 'prop-types'
import React from 'react'

function RectanglePost (props) {
  const {
    title
  } = props

  return (
    <div>
      <h2>{title}</h2>
    </div>
  )
}
RectanglePost.propTypes = {
  title: PropTypes.string.isRequired
}

export default RectanglePost
