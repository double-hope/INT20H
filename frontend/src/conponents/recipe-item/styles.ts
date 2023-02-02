import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors, radiuses }: Theme) => css`
    border: 10px solid ${colors.background};
    border-radius: ${radiuses.lg};

    & img {
        width: 100%;
    }
`;