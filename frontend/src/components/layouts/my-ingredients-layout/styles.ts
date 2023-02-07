import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({colors}: Theme) => css`
    width: 100%;
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
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 50px;
    gap: 10px;
    width: 100%;
`;


export const heading = ({ colors, fontSizes, fontWeights, radiuses }: Theme) => css`
    position: relative;
    width: 100%;
    background-color: ${colors.light};
    text-align: center;
    font-size: ${fontSizes.category};
    font-weight: ${fontWeights.h1};
    padding: 20px 0 30px;
    border-radius: ${radiuses.xlg};
    border: 10px solid rgba(0, 0, 0, 0.2);
    margin-bottom: 50px;
`;

export const button = ({ colors, radiuses, fontSizes }: Theme) => css`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${colors.black};
    border: 10px solid rgba(255, 255, 255, 0.8);
    color: ${colors.light};
    font-size: ${fontSizes.icons};
    padding: 20px;
    border-radius: ${radiuses.xlg};

    &:hover {
        background-color: ${colors.accent};
        cursor: pointer;
    }
`;