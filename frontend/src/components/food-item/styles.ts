import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = () => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 10px;
`;

export const image = ({ radiuses, colors, fontSizes }: Theme) => css`
    position: relative;
    border-radius: ${radiuses.xlg};
    border: 10px solid ${colors.light};
    width: 200px;
    height: 170px;
    z-index: 2;

    & img {
        width: 100%;
        height: 100%;
        border-radius: ${radiuses.lg};
        object-fit: cover;
    }

    & div {
        z-index: 3;
        position: absolute;
        border-radius: ${radiuses.circle};
        width: 40px;
        height: 40px;
        background-color: ${colors.green};
        bottom: -20px;
        right: -20px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-weight: 600;
        font-family: 'Mohave';
        font-size: ${fontSizes.heading};
        color: ${colors.light};
        &[added-item='false'] {
            background-color: ${colors.accent};
        }
    }
`;

export const name = ({ colors, radiuses }: Theme) => css`
    background-color: ${colors.light};
    width: 170px;
    border-radius: ${radiuses.xlg};
    padding: 50px 30px 30px;
    position: relative;
    bottom: 40px;
    font-family: 'Mohave';
    font-weight: 600;
`;