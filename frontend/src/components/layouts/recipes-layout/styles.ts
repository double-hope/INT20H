import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const layout = () => css`
    transform: translateY(-70px);
    max-width: 1024px;
    margin: 0 auto;
    & *:not(i){
        font-family: 'Mohave';
    }
`;

export const heading = ({ colors, fontSizes, fontWeights, radiuses }: Theme) => css`
    width: 100%;
    background-color: ${colors.light};
    text-align: center;
    font-size: ${fontSizes.heading};
    font-weight: ${fontWeights.h1};
    padding: 70px 0 50px;
    border-radius: ${radiuses.xlg};
    border: 10px solid rgba(0, 0, 0, 0.2);
`;

export const category = ({ colors, radiuses, fontSizes }: Theme) => css`
    color: ${colors.light};
    border-radius: ${radiuses.xlg};
    background-color: ${colors.text};
    border: 10px solid ${colors.light};
    width: 100%;
    text-align: center;
    padding: 10px;
    font-size: ${fontSizes.category};
`;

export const container = () => css`
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
`;