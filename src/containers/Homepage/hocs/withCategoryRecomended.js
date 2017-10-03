import { compose, withProps } from 'recompose'
import { get } from 'lodash'
import categoryName from '_config/categoryName'

export default compose(
  withProps(() => {
    const CategoryPhotos = categoryName.filter(category => {
      return get(category, 'whiteList')
    })
    return {
      CategoryPhotos
    }
  })
)
