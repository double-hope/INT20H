import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const footer = ({ spaces }: Theme) => css`
    text-align: center;
    & > h1 {
        margin: ${spaces.md};
        font-family: 'Montserrat';
        font-weight: 1200;
        font-size: 80px;
        color: #FFFFFF;
        -webkit-text-stroke: 1px black;
    }
    & > p {
        margin: 5px;
    }
`;

export const icons = ({ colors, fontSizes }: Theme) => css`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    & > * {
        color: ${colors.dark};
        font-size: ${fontSizes.icons};
    }
`;