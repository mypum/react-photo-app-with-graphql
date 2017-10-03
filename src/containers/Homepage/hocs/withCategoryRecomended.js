import { compose, withProps } from 'recompose'
import { find, get } from 'lodash'
import camelcase from 'camelcase'
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
