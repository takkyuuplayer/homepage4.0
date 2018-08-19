import reducer, { setBlogFeed } from "./blog";

describe("ducks/blog", () => {
    describe("reducer", () => {
        it("returns initial state", () => {
            expect(reducer()).toStrictEqual([]);
        });
    });
    describe("actions", () => {
        it("has setBlogFeed", () => {
            const feeds = [
                { title: "1", link: "2", published: "3" },
            ];
            expect(setBlogFeed(feeds)).toStrictEqual({ payload: feeds, type: "SET_BLOG_FEED" });
        });
    });

});
