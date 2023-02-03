import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ spaces }: Theme) => css`
    text-align: center;
    & > h1 {
        margin: ${spaces.md};
        font-family: 'Montserrat';
        font-weight: 1200;
        font-size: 80px;
        color: #FFFFFF;
        -webkit-text-stroke: 1px black;
    }
`;

export const flex = () => css`
    display: flex;
    gap: 10px;
`;