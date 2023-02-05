import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = () => css`
    margin: 0 20px;
    position: relative;
`;

export const input = ({colors, radiuses, fontSizes}: Theme) => css`
    background: ${colors.light};
    color: ${colors.text};
    font-size: 18px;
    padding: 10px;
    display: block;
    width: 320px;
    border: none;
    border: 1px solid ${colors.text};
    border-radius: ${radiuses.md};

    &:focus {
        outline: none;
    }

    &:focus~label, &:valid~label{
        top: -6px;
        font-size: ${fontSizes.caption};
        background: ${colors.background};
        color: ${colors.accent};
    }
`;

export const label = ({colors}: Theme) => css`
    position: absolute;
    color: ${colors.text};
    font-size: 16px;
    font-weight: normal;
    pointer-events: none;
    left: 10px;
    top: 10px;
    transition: 300ms ease all;
`;

