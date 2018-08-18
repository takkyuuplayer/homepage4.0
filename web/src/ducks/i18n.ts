import { IntlState } from "react-intl-redux";
import { updateIntl } from "react-intl-redux";
import * as locales from "../i18n/locales.json";

const defaultLanguage = "ja";

export const initialState: IntlState = {
    locale: defaultLanguage,
    messages: locales[defaultLanguage],
};

export const setLocaleByBrowserLanguages = (languages: ReadonlyArray<string>) => {
    const shortLanguage = [];
    for (const locale of languages) {
        if (locales.hasOwnProperty(locale)) {
            return updateIntl({
                locale,
                messages: locales[locale],
            });
        }
        shortLanguage.push(locale.substr(0, 2));
    }
    for (const locale of shortLanguage) {
        if (locales.hasOwnProperty(locale)) {
            return updateIntl({
                locale,
                messages: locales[locale],
            });
        }
    }

    return updateIntl(initialState);
};
