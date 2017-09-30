import resetStyle from './reset.style.js'
import baseStyle from './base.style.js'

export default ComposedComponent => props => (
  <div>
    <ComposedComponent {...props} />
    <style jsx global>{resetStyle}</style>
    <style jsx global>{baseStyle}</style>
  </div>
);
