import { combineReducers } from 'redux'

import pageReucer from './page/page.reducer'

const rootReducer = combineReducers({
  page: pageReucer
})

export default rootReducer