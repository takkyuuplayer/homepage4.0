import { combineReducers } from 'redux'
import blog, * as blogActions from './blog'
import intl, * as i18nActions from './i18n'

const rootReducer = combineReducers({ blog, intl })
export const actions = { blogActions, i18nActions }
export type RootState = ReturnType<typeof rootReducer>
export type RootActions = typeof actions
export default rootReducer
