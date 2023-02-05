import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const stretchLayout = ({ fontSizes }: Theme) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    & > h1 {
        font-family: 'Mohave';
        font-size: ${fontSizes.h1};
        text-transform: uppercase;
    }
`;

export const defaultLayout = ({ fontSizes }: Theme) => css`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    & > h1 {
        font-family: 'Mohave';
        font-size: ${fontSizes.h1};
        text-transform: uppercase;
    }
`;