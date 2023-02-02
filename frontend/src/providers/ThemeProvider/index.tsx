import type { ReactNode } from 'react';
import { useState } from 'react';
import { Global, ThemeProvider as ThemeProviderEmotion } from '@emotion/react';
import { lightTheme, globalStyles } from 'theme';

type ThemeProviderProps = {
  children: ReactNode;
};

const colorSchemes = {
  light: lightTheme,
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme] = useState(colorSchemes['light']);
  
  return (
    <ThemeProviderEmotion theme={theme}>
      <Global styles={globalStyles} />
      {children}
    </ThemeProviderEmotion>
  );
};

export { ThemeProvider };
