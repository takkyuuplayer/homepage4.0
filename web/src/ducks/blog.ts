import { Action } from "redux";
import { isUndefined } from "util";

interface IBlogFeed {
    title: string;
    link: string;
    published: string;
    [attr: string]: string;
}

enum ActionTypes {
    SET_BLOG_FEED = "SET_BLOG_FEED",
}

export const setBlogFeed = (payload: ReadonlyArray<IBlogFeed>) => ({
    payload,
    type: ActionTypes.SET_BLOG_FEED,
});

export default (state: ReadonlyArray<IBlogFeed> = [], action: Action | undefined = undefined) => {
    if (isUndefined(action)) {
        return state;
    }
    switch (action.type) {
        default:
            return state;
    }
};
