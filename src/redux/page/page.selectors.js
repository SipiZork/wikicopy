import { createSelector } from 'reselect'

const selectPage = state => state.page

export const selectActiveIndex = createSelector(
  [selectPage],
  page => page.activeIndex
)