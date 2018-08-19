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

interface IAction extends Action {
    type: string;
    payload: ReadonlyArray<IBlogFeed>;
}

export default (state: ReadonlyArray<IBlogFeed> = [], action: IAction | undefined = undefined) => {
    if (isUndefined(action)) {
        return state;
    }
    switch (action.type) {
        case ActionTypes.SET_BLOG_FEED:
            return action.payload;
        default:
            return state;
    }
};
