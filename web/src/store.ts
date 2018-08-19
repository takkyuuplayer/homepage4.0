import { addLocaleData } from "react-intl";
import { intlReducer } from "react-intl-redux";
import * as enLocaleData from "react-intl/locale-data/en";
import * as jaLocaleData from "react-intl/locale-data/ja";
import { combineReducers, createStore } from "redux";
import { initialState, initialState as intl, setLocale, setLocaleByBrowserLanguages } from "./ducks/i18n";

addLocaleData([...jaLocaleData, ...enLocaleData]);

const reducer = combineReducers({
    intl: intlReducer,
});

const store = createStore(reducer, { intl });
const locale = localStorage.getItem("locale");
if (locale) {
    store.dispatch(setLocale(locale));
} else {
    store.dispatch(setLocaleByBrowserLanguages(navigator.languages));
}

export default store;
