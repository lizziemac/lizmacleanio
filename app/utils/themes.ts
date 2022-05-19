export interface Theme {
  primaryColor: string;
  primaryLightColor: string;
  primaryDarkColor: string;
  textColor: string;
  primaryBorderColor: string;
  hover: string;
  fontSize: string;
  mediaFontSize: string;
  h1FontSize: string;
  h1MediaFontSize: string;
  linkColor: string;
  linkVisitedColor: string;
}

// Desktop
const fontSize = 'calc(10px + 2vmin)';
const h1FontSize = 'calc(16px + 2vmin)';

// Mobile
const mediaFontSize = 'calc(20px + 2vmin)';
const h1MediaFontSize = 'calc(40px + 2vmin)';

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=FFFFFF
export const lightTheme: Theme = {
  primaryColor: '#fcfcfc',
  primaryLightColor: '#FFF',
  primaryDarkColor: '#cccccc',
  textColor: '#363537',
  primaryBorderColor: '#6B8096',
  hover: 'grey',
  fontSize,
  mediaFontSize,
  h1FontSize,
  h1MediaFontSize,
  linkColor: undefined,        // allow default
  linkVisitedColor: undefined, // allow default
};

// https://material.io/resources/color/#!/?view.left=0&view.right=0&primary.color=363537
export const darkTheme: Theme = {
  primaryColor: '#363537',
  primaryLightColor: '#605f61',
  primaryDarkColor: '#100f11',
  textColor: '#FFF',
  primaryBorderColor: '#6B8096',
  hover: 'grey',
  fontSize,
  mediaFontSize,
  h1FontSize,
  h1MediaFontSize,
  linkColor: '#8EBCFF',        // allow default
  linkVisitedColor: '#EB9EFF', // allow default
};

export type ThemeMode = 'light' | 'dark';

export const getTheme = (mode: ThemeMode): Theme => {
  const themes = {
    'light': lightTheme,
    'dark': darkTheme
  };

  return themes[mode];
};
