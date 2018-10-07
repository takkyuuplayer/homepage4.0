import locales from "../i18n/locales.json";
import reducer, * as actions from "./i18n";

describe("i18n", () => {
    describe("actions", () => {
        describe("setLocaleByBrowserLanguages", () => {
            it("returns ja locale if not found", () => {
                expect(actions.setLocaleByBrowserLanguages(["fr"]).payload.locale).toBe("ja");
            });
            it("returns first found locale", () => {
                expect(actions.setLocaleByBrowserLanguages(["en", "ja"]).payload.locale).toBe("en");
            });
            it("handle en-US, ja-JP", () => {
                expect(actions.setLocaleByBrowserLanguages(["en-US", "ja-JP"]).payload.locale).toBe("en");
            });
        });
        describe("setLocale", () => {
            it("returns updateLocale action", () => {
                expect(actions.setLocale("ja").payload.locale).toBe("ja");
                expect(actions.setLocale("en").payload.locale).toBe("en");
            });
        });
    });
    describe("reducer", () => {
        it("returns initial state", () => {
            const initialState = reducer(undefined, {} as any);
            expect(initialState.locale).toBe("ja");
            expect(initialState.messages).toBe(locales.ja);
        });
    });
});
