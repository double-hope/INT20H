import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ spaces }: Theme) => css`
    width: 80%;
    max-width: 1200px;
    margin: 0 auto;
    text-align: center;
`;

export const flex = ({ colors, radiuses }: Theme) => css`
    background-color: ${colors.light};
    padding: 20px;
    border-radius: ${radiuses.xlg};
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
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

export const button = ({ colors, radiuses, fontSizes }: Theme) => css`
    position: absolute;
    right: 20px;
    top: 50%;
    transform: translateY(-50%);
    background-color: ${colors.black};
    border: 10px solid rgba(255, 255, 255, 0.8);
    color: ${colors.light};
    font-size: ${fontSizes.body};
    padding: 20px;
    border-radius: ${radiuses.xlg};

    &:hover {
        background-color: ${colors.accent};
        cursor: pointer;
    }

    @media all and (max-width: 800px) {
        position: relative;
        width: 50%;
        margin: 0 auto;
        top: 20px;
        left: 0;
    } 
`;

export const search = () => css`
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    margin-bottom: 50px;
`;