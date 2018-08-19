import { addLocaleData } from "react-intl";
import { intlReducer } from "react-intl-redux";
import * as enLocaleData from "react-intl/locale-data/en";
import * as jaLocaleData from "react-intl/locale-data/ja";
import { combineReducers, createStore } from "redux";
import { ActionType, StateType } from "typesafe-actions";
import blog, * as blogActions from "./ducks/blog";
import intl, * as i18nActions from "./ducks/i18n";

addLocaleData([...jaLocaleData, ...enLocaleData]);

const rootReducer = { blog, intl };
const rootActions = { blogActions, i18nActions };
type RootState = StateType<typeof rootReducer>;
type RootActions = ActionType<typeof rootActions>;

const reducer = combineReducers<RootState, RootActions>({
    blog,
    intl,
});

const store = createStore(reducer);
store.dispatch(i18nActions.setLocaleByBrowserLanguages(navigator.languages));

(async () => {
    const res = await fetch("https://wudix076af.execute-api.ap-northeast-1.amazonaws.com/Prod/feed");
    const body = await res.json();
    store.dispatch(blogActions.setBlogFeed(body.data));
})();

export default store;
