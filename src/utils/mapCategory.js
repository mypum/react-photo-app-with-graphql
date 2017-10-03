import { get, find } from 'lodash'
import categoryName from '../_config/categoryName'

export default catID => get(find(categoryName, { catID: parseInt(catID) }), 'catName')
