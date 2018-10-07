declare const graphql: (query: TemplateStringsArray) => void;
declare module '*.gif';
declare module '*/locales.json' {
    interface Locale {
        [lang: string]: {
            [key: string]: string;
        }
    }
    const value: Locale;
    export default value;
}