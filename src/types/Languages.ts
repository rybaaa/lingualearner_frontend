export type Languages = {
  language: LanguagesType;
};

export type LanguagesType = (typeof LanguageList)[number] | null;

export const LanguageList = ["English", "French", "Polish", "Portuguese", "Spanish", "Russian", "Ukrainian"];
