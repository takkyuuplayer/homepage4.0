import * as locales from "../i18n/locales.json";
import { initialState, setLocale, setLocaleByBrowserLanguages } from "./i18n";

describe("i18n", () => {
    describe("initialState", () => {
        it("is ja", () => {
            expect(initialState.locale).toBe("ja");
            expect(initialState.messages).toBe(locales.ja);
        });
    });
    describe("setLocaleByBrowserLanguages", () => {
        it("returns ja locale if not found", () => {
            expect(setLocaleByBrowserLanguages(["fr"]).payload.locale).toBe("ja");
        });
        it("returns first found locale", () => {
            expect(setLocaleByBrowserLanguages(["en", "ja"]).payload.locale).toBe("en");
        });
        it("handle en-US, ja-JP", () => {
            expect(setLocaleByBrowserLanguages(["en-US", "ja-JP"]).payload.locale).toBe("en");
        });
    });
    describe("setLocale", () => {
        it("returns updateLocale action", () => {
            expect(setLocale("ja").payload.locale).toBe("ja");
            expect(setLocale("en").payload.locale).toBe("en");
        });
    });
});
