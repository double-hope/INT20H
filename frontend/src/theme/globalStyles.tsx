import type { Theme } from '@emotion/react';
import { css } from '@emotion/react';
import emotionNormalize from 'emotion-normalize';
const alef = require('assets/fonts/Alef-Regular.ttf');
const mohave = require('assets/fonts/Mohave-Regular.ttf');
const montserrat = require('assets/fonts/Montserrat-Regular.ttf');


export const globalStyles = (theme: Theme) => css`
  @font-face {
    font-family: 'Mohave';
    src: url(${mohave});
  }

  @font-face {
    font-family: 'Alef';
    src: url(${alef});
  }
  
  @font-face {
    font-family: 'Montserrat';
    src: url(${montserrat});
  }

  * {
    box-sizing: border-box;
    font-family: 'Alef';
  }

  body {
    margin: 0;
    padding: 0;
  }

  body::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  
  body::-webkit-scrollbar-track {
    background-color: ${theme.colors.black};
  }
  
  body::-webkit-scrollbar-thumb {
    background-color: ${theme.colors.light};
  }

  html,
  body {
    height: 100%;
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

export const resetButton = css`
  border: none;
  outline: none;
  padding: 0;
  margin: 0;
  background: transparent;
  font: inherit;
`;
