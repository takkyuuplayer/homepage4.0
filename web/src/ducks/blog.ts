import { ActionType, createAction } from "typesafe-actions";

interface IBlogFeed {
    title: string;
    link: string;
    published: string;
    [attr: string]: string;
}

enum ActionTypes {
    SET_BLOG_FEED = "SET_BLOG_FEED",
}

export const setBlogFeed = createAction(ActionTypes.SET_BLOG_FEED, (resolve) =>
    (payload: IBlogFeed[]) => resolve(payload),
);

type BlogAction = ActionType<typeof setBlogFeed>;

export default (state: IBlogFeed[] = [], action: BlogAction) => {
    switch (action.type) {
        case ActionTypes.SET_BLOG_FEED:
            return action.payload;
        default:
            return state;
    }
};
