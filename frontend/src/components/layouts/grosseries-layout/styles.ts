import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({colors}: Theme) => css`
    width: 80%;
    max-width: 1024px;
    margin: 0 auto;
    color: ${colors.black};
    font-size: 2rem;
`;

export const layout = ({colors, radiuses}: Theme) => css`
    background-color: ${colors.light};
    border-radius: ${radiuses.xlg};
    padding: 20px;
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 10px;
    width: 100%;

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`;


export const heading = ({ colors, fontSizes, fontWeights, radiuses }: Theme) => css`
    position: relative;
    width: 100%;
    background-color: ${colors.light};
    text-align: center;
    font-size: ${fontSizes.icons};
    font-weight: ${fontWeights.h1};
    padding: 20px 0 30px;
    border-radius: ${radiuses.xlg};
    border: 10px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 50px;
`;

export const map = () => css`
    background-color: rgba(0, 0, 0, 0.3);
`;

export const searchMenu = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;