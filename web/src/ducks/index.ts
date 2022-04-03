import { combineReducers } from 'redux'
import blog, * as blogActions from './blog'

const rootReducer = combineReducers({ blog })
export const actions = { blogActions }
export type RootState = ReturnType<typeof rootReducer>
export type RootActions = typeof actions
export default rootReducer
