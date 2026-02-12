import { translations } from "./translations";

export const getTranslation = (language, key) => {
  const keys = key.split(".");
  let value = translations[language];

  for (const k of keys) {
    value = value?.[k];
  }

  return value || key;
};
