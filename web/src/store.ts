import { addLocaleData } from "react-intl";
import * as enLocaleData from "react-intl/locale-data/en";
import * as jaLocaleData from "react-intl/locale-data/ja";
import { createStore } from "redux";
import reducer, { actions } from "./ducks";

addLocaleData([...jaLocaleData, ...enLocaleData]);

const store = createStore(reducer);
store.dispatch(actions.i18nActions.setLocaleByBrowserLanguages(navigator.languages));

(async () => {
    const res = await fetch("https://wudix076af.execute-api.ap-northeast-1.amazonaws.com/Prod/feed");
    const body = await res.json();
    store.dispatch(actions.blogActions.setBlogFeed(body.data));
})();

export default store;
