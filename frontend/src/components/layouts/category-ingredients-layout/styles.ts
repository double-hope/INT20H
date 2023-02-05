import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ spaces }: Theme) => css`
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

export const flex = () => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;