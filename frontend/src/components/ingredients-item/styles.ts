import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors, radiuses }: Theme) => css`
    width: 100%;
    border: 10px solid ${colors.light};
    border-radius: ${radiuses.xlg};
    position: relative;
    cursor: pointer;

    & img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${radiuses.lg};
        filter: brightness(50%);
    }

    & h3 {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 1;
    }

    &:hover div {
        transition: all .2s;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background-color: rgba(176, 63, 0, 0.8);
        border-radius: ${radiuses.lg};
    }
`;