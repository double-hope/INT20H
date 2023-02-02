declare global {
    import type { lightTheme } from 'theme';
  
    module '@emotion/react' {
      type GlobalTheme = typeof lightTheme;
  
      interface Theme extends GlobalTheme {}
      export const useTheme: () => Theme;
    }
  }
  