import { combineReducers } from 'redux'
import UIReducer from './modules/UI/UIReducer'

export default function getReducer (apollo) {
  return combineReducers({
    apollo: apollo.reducer(),
    ui: UIReducer
  })
}
