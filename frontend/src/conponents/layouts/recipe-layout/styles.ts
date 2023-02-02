import { css } from '@emotion/react';

export const layout = () => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(200px, auto);
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;

    & div:nth-child(3n + 2) {
        grid-row: span 2;
    }
`;