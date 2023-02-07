import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors, fontSizes, radiuses }: Theme) => css`
    display: flex;
    justify-content: center;
    position: relative;
    background-color: ${colors.text};
    width: 250px;
    padding: 40px;
    border-radius: ${radiuses.md};
    transition: all .2s;
    cursor: pointer;
    font-family: 'Alef';
    font-size: ${fontSizes.icons};
    color: ${colors.light};
    text-decoration: none;

    &:hover {
        background-color: ${colors.accent};
    }

    & i {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;