import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';


export const layout = ({ fontSizes }: Theme) => css`
    height: 100vh;
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