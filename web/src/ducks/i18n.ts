import { IntlState } from "react-intl-redux";
import { updateIntl } from "react-intl-redux";
import * as locales from "../i18n/locales.json";

const defaultLocale = "ja";

export const initialState: IntlState = {
    locale: defaultLocale,
    messages: locales[defaultLocale],
};

export const setLocaleByBrowserLanguages = (languages: ReadonlyArray<string>) => {
    const shortLanguage = [];
    for (const locale of languages) {
        if (locales.hasOwnProperty(locale)) {
            return setLocale(locale);
        }
        shortLanguage.push(locale.substr(0, 2));
    }
    for (const locale of shortLanguage) {
        if (locales.hasOwnProperty(locale)) {
            return setLocale(locale);
        }
    }

    return setLocale(defaultLocale);
};

export const setLocale = (locale: string) => {
    localStorage.setItem("locale", locale);
    return updateIntl({
        locale,
        messages: locales[locale],
    });
};
