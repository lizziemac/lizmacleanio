import i18n from './index';

export const translate = (key: string): string => {
  // console.log(getLocale());
  return i18n.t([key]);
};