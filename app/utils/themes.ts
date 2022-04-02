export interface Theme {
  primary: string;
  complementary: string;
  primaryborder: string;
  hover: string;
}

export const lightTheme: Theme = {
  primary: '#FFF',
  complementary: '#363537',
  primaryborder: '#6B8096',
  hover: 'grey',
};

export const darkTheme: Theme = {
  primary: '#363537',
  complementary: '#FFF',
  primaryborder: '#6B8096',
  hover: 'grey',
};

export type ThemeMode = 'light' | 'dark';

export const getTheme = (mode: ThemeMode): Theme => {
  const themes = {
    'light': lightTheme,
    'dark': darkTheme
  };

  return themes[mode];
};
