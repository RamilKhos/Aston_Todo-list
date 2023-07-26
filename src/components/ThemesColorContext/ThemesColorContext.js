import { createContext } from 'react';

export const themesColors = {
  light: {
    generalBackground: { background: 'linear-gradient(33deg, #986969,#c5a9a3,#e0d2d5)' },
    contentBackground: { background: 'rgba(197, 169, 163, 0.863)' },
  },
  dark: {
    generalBackground: { background: 'linear-gradient(33deg, #765252,#ab847b,#b79e9e)' },
    contentBackground: { background: 'rgba(182, 137, 127, 0.863)' },
  },
};

export const ThemesColorContext = createContext();
