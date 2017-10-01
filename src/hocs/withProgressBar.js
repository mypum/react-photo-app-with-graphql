import { compose, lifecycle } from 'recompose'
import configureProgressBar from 'utils/routing'

export default compose(
  lifecycle({
    componentDidMount () {
      configureProgressBar()
    }
  })
)
