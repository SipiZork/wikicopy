import { PageActionTypes } from './page.types'

const INITIAL_STATE = {
  activeIndex: 0
}

const pageReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PageActionTypes.SET_ACTIVE_INDEX: 
      return {
        ...state,
        activeIndex: action.payload
      }
    default:
      return state
  }
}

export default pageReducer