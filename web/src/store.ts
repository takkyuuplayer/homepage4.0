import { createStore } from "redux";
import reducer, { actions } from "./ducks";

let initialState;
if (typeof localStorage !== `undefined`) {
    const cachedState = localStorage.getItem("redux");
    initialState = cachedState ? JSON.parse(cachedState) : undefined;
}
const store = createStore(reducer, initialState);

if (typeof localStorage !== `undefined`) {
    store.subscribe(() => localStorage.setItem("redux", JSON.stringify(store.getState())));
}

if (typeof fetch !== `undefined`) {
    fetch("https://wudix076af.execute-api.ap-northeast-1.amazonaws.com/Prod/feed")
        .then((res) => res.json())
        .then((body) => store.dispatch(actions.blogActions.setBlogFeed(body.data)));
}

export default store;
