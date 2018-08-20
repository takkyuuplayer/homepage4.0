import { combineReducers, createStore } from "redux";
import { ActionType, StateType } from "typesafe-actions";
import blog, * as blogActions from "./blog";
import intl, * as i18nActions from "./i18n";

const rootReducer = { blog, intl };
export const actions = { blogActions, i18nActions };
export type RootState = StateType<typeof rootReducer>;
export type RootActions = ActionType<typeof actions>;

export default combineReducers<RootState, RootActions>({
    blog,
    intl,
});
