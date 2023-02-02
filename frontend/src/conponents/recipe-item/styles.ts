import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors, radiuses }: Theme) => css`
    border: 10px solid ${colors.background};
    border-radius: ${radiuses.lg};
    z-index: 1;

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 30px;
    }
`;