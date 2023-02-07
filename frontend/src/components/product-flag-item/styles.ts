import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({fontSizes}: Theme) => css`
    display: flex;
    width: 100%;
    max-width: 400px;
    gap: 10px;
    margin: 0 20px;

    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font-weight: 600;
        font-family: 'Mohave';
        font-size: ${fontSizes.body};
    }
`;

export const amount = ({ colors, radiuses }: Theme) => css`
    width: 100px;
    border: 1px solid ${colors.black};
    padding: 0 20px;
    border-radius: ${radiuses.lg};
    color: ${colors.light};
    -webkit-text-stroke: .25px ${colors.text};
`;

export const name = ({ colors, radiuses }: Theme) => css`
    flex-grow: 1;
    max-width: 200px;
    padding: 0 30px;
    border-radius: ${radiuses.lg};
    color: ${colors.light};
    background-color: ${colors.black};
`;

export const flag = ({radiuses, colors}: Theme) => css`
    cursor: pointer;
    z-index: 3;
    border-radius: ${radiuses.circle};
    width: 40px;
    background-color: ${colors.green};
    color: ${colors.light};
    &[added-item='true'] {
        background-color: ${colors.accent};
    }
`;