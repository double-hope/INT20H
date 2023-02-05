import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors, fontSizes, radiuses }: Theme) => css`
    display: flex;
    justify-content: center;
    position: relative;
    background-color: ${colors.text};
    width: 300px;
    padding: 50px;
    border-radius: ${radiuses.md};
    transition: all .2s;
    cursor: pointer;
    font-family: 'Montserrat';
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