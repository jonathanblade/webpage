import ru_ui from "./ru";
import en_ui from "./en";

export const languages = {
  ru: "Русский",
  en: "English",
} as const;

export const defaultLang = "en";

export const ui = {
  ru: ru_ui,
  en: en_ui,
} as const;

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split("/");
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  };
}
