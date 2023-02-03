import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const burgerMenu = ({ colors }: Theme) => css`
    z-index: 2;
    background-color: ${colors.background};
    position: fixed;
    top: 0;
    bottom: 0;
    border-radius: 0 100px 100px 0;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all .5s;
    transform: translateX(-80%);
`;

export const triggerWrapper = () => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: all .5s;

    & h1 {
        font-family: 'Mohave';
        writing-mode: vertical-rl;
        transform: rotate(180deg);
        text-transform: uppercase;
    }
`;

export const hiddenWrapper = () => css`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & h1 {
        font-family: 'Mohave';
        text-transform: uppercase;
    }
`;

export const menuIcon = ({ colors, radiuses }: Theme) => css`
    background-color: ${colors.accent};
    color: ${colors.light};
    border-radius: ${radiuses.md};
    padding: 20px;
    cursor: pointer;
    transition: .3s all;
`;