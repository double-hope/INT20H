import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';


export const icons = ({ colors, fontSizes }: Theme) => css`
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    & > * {
        color: ${colors.dark};
        font-size: ${fontSizes.icons};
    }
`;