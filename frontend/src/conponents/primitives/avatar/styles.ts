import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const avatar = ({ radiuses, iconSizes }: Theme) => css`
    border-radius: ${radiuses.circle};
    width: ${iconSizes.md};
    height: ${iconSizes.md};
`;

export const icon = ({ colors, iconSizes } : Theme) => css`
    font-size: ${iconSizes.md};
    color: ${colors.light};
`;