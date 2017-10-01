import React from 'react'
import resetStyle from './reset.style.js'
import baseStyle from './base.style'
import gridSystem from './grid.style.js'
import nprogress from './nprogress.style'

export default ComposedComponent => props => (
  <div>
    <ComposedComponent {...props} />
    <style jsx global>{resetStyle}</style>
    <style jsx global>{baseStyle}</style>
    <style jsx global>{gridSystem}</style>
    <style jsx global>{nprogress}</style>
  </div>
)
