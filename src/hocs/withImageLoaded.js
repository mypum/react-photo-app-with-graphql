import { compose, lifecycle, withState } from 'recompose'

const imagesLoaded = typeof window !== 'undefined' ? require('imagesloaded') : undefined

export default (selector, stateName) => compose(
  withState(stateName, 'setIsLoaded', false),
  lifecycle({
    componentDidMount () {
      imagesLoaded(selector, () => {
        this.props.setIsLoaded(true)
      })
    }
  })
)
