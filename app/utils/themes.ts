interface Theme {
  primary: string;
  complementary: string;
  primaryborder: string;
}

export const lightTheme: Theme = {
  primary: '#FFF',
  complementary: '#363537',
  primaryborder: '#6B8096',
}

export const darkTheme: Theme = {
  primary: '#363537',
  complementary: '#FFF',
  primaryborder: '#6B8096',
}

export type ThemeMode = 'light' | 'dark';

export const getTheme = (mode: ThemeMode) => {
  const themes = {
    'light': lightTheme,
    'dark': darkTheme
  };

  return themes[mode];
}
