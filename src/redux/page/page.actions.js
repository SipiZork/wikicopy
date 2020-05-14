import { PageActionTypes } from './page.types'

export const setActiveIndex = (index) => ({
  type: PageActionTypes.SET_ACTIVE_INDEX,
  payload: index
})