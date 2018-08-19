import { addLocaleData } from "react-intl";
import { intlReducer } from "react-intl-redux";
import * as enLocaleData from "react-intl/locale-data/en";
import * as jaLocaleData from "react-intl/locale-data/ja";
import { combineReducers, createStore } from "redux";
import blog, { setBlogFeed } from "./ducks/blog";
import { initialState, initialState as intl, setLocaleByBrowserLanguages } from "./ducks/i18n";

addLocaleData([...jaLocaleData, ...enLocaleData]);

const reducer = combineReducers({
    blog,
    intl: intlReducer,
});

const store = createStore(reducer, { intl });
store.dispatch(setLocaleByBrowserLanguages(navigator.languages));

(async () => {
    const res = await fetch("https://wudix076af.execute-api.ap-northeast-1.amazonaws.com/Prod/feed");
    const body = await res.json();
    store.dispatch(setBlogFeed(body.data));
})();

export default store;
