import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ spaces }: Theme) => css`
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