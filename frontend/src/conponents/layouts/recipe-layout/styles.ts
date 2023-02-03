import { css } from '@emotion/react';

export const wrapper = () => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    color: white;
    font-size: 2rem;
`;

export const layout = () => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(150px, auto);
    gap: 20px;
    width: 100%;

    & div:nth-of-type(3n + 2) {
        grid-row: span 2;
    }
`;