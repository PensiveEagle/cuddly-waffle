"use client";

import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';

const roboto = Roboto({
    weight: ['300', '400', '500', '700'],
    subsets: ['latin'],
    display: "swap",
});

declare module '@mui/material/styles' {
  interface Palette {
    hero: Palette['primary'];
  }

  interface PaletteOptions {
    hero?: PaletteOptions['primary'];
  }
}

// Update the Button's color options to include an ochre option
declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    hero: true;
  }
}

const theme = createTheme({
    typography: {
        fontFamily: roboto.style.fontFamily,
    },
    palette: {
        primary: {
            main: '#447d9b'
        },
        secondary: {
            main: '#D7D7D7',
            dark: '#273F4F',
            light: '#D7D7D7'
        },
        hero: {
            main: '#ff6500',
            light: '#ff6500',
            dark: '#ff6500',
            contrastText: '#ffffff'
        }
    }
});

export default theme;