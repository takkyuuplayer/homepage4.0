import { addLocaleData } from "react-intl";
import { intlReducer } from "react-intl-redux";
import * as enLocaleData from "react-intl/locale-data/en";
import * as jaLocaleData from "react-intl/locale-data/ja";
import { combineReducers, createStore } from "redux";
import { initialState, initialState as intl } from "./ducks/i18n";

addLocaleData([...jaLocaleData, ...enLocaleData]);

const reducer = combineReducers({
    intl: intlReducer,
});

export default createStore(reducer, { intl });
