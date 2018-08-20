import { addLocaleData } from "react-intl";
import * as enLocaleData from "react-intl/locale-data/en";
import * as jaLocaleData from "react-intl/locale-data/ja";
import { createStore } from "redux";
import reducer, { actions } from "./ducks";

addLocaleData([...jaLocaleData, ...enLocaleData]);

const cachedState = localStorage.getItem("redux");
const initialState = cachedState ? JSON.parse(cachedState) : undefined;
const store = createStore(reducer, initialState);

if (!initialState) {
    store.subscribe(() => localStorage.setItem("redux", JSON.stringify(store.getState())));
}

fetch("https://wudix076af.execute-api.ap-northeast-1.amazonaws.com/Prod/feed")
    .then((res) => res.json())
    .then((body) => store.dispatch(actions.blogActions.setBlogFeed(body.data)));

export default store;
