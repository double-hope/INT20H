import { css } from '@emotion/react';

export const wrapper = () => css`
    width: 80%;
    margin: 0 auto;
    color: white;
    font-size: 2rem;
`;

export const layout = () => css`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-auto-rows: 200px;
    gap: 20px;
    width: 100%;

    & div:first-of-type {
        grid-column: span 3;
    }

    @media all and (max-width: 900px) {
        
        grid-template-columns: 1fr 1fr;
        & div:first-of-type {
            grid-column: span 2;
        }
    }

    @media all and (max-width: 600px) {
        
        grid-template-columns: 1fr;
        & div:first-of-type {
            grid-column: span 1;
        }
    }
`;