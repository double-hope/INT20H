import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const avatar = ({ radiuses, fontSizes }: Theme) => css`
    border-radius: ${radiuses.circle};
    width: ${fontSizes.avatar};
    height: ${fontSizes.avatar};
`;

export const icon = ({ colors, fontSizes } : Theme) => css`
    font-size: ${fontSizes.avatar};
    color: ${colors.light};
`;