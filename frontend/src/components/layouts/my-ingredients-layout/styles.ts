import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({colors}: Theme) => css`
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    color: ${colors.light};
    font-size: 2rem;
`;

export const layout = ({colors, radiuses}: Theme) => css`
    background-color: ${colors.light};
    border-radius: ${radiuses.xlg};
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50px;
    gap: 10px;
    width: 100%;
`;