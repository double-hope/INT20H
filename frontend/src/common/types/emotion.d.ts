import type { lightTheme } from 'theme';

declare module '@emotion/react' {
  
  type GlobalTheme = typeof lightTheme;
  export interface Theme extends GlobalTheme {}
}