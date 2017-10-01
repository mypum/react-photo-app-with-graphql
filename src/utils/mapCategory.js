import { find } from 'lodash'
import categoryName from '../_config/categoryName'

export default catID => find(categoryName, { catID: catID }).catName
