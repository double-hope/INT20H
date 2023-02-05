import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({fontSizes}: Theme) => css`
    display: flex;
    width: 100%;
    max-width: 500px;
    gap: 10px;

    & > * {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 40px;
        font-weight: 600;
        font-family: 'Mohave';
        font-size: ${fontSizes.icons};
    }
`;

export const amount = ({ colors, radiuses }: Theme) => css`
    border: 1px solid ${colors.black};
    padding: 0 30px;
    border-radius: ${radiuses.lg};
    color: ${colors.light};
    -webkit-text-stroke: .25px ${colors.text};
`;

export const name = ({ colors, radiuses }: Theme) => css`
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