import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';

export const globalStyles = (theme: Theme) => css`
  @font-face {
    font-family: 'Mohave-Regular';
    src: url('../assets/fonts/Mohave-Regular.ttf');
  }

  @font-face {
    font-family: 'Alef-Regular';
    src: url('../assets/fonts/Alef-Regular.ttf');
  }

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
  }

  html,
  body {
    height: 100%;
    background: ${theme.colors.background};
    color: ${theme.colors.text};
    @media (max-width: ${theme.breakpoints.xl}px) {
      font-size: 14px;
    }

    @media (max-width: ${theme.breakpoints.sm}px) {
      font-size: 12px;
    }
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  ${emotionNormalize}
`;
