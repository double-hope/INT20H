import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = () => css`
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
`;

export const avatar = ({ radiuses, iconSizes }: Theme) => css`
    border-radius: ${radiuses.circle};
    width: ${iconSizes.md};
    height: ${iconSizes.md};
`;

export const icon = ({ colors, iconSizes } : Theme) => css`
    font-size: ${iconSizes.md};
    color: ${colors.light};
`;

export const name = ({ radiuses, spaces, colors, fontWeights }: Theme) => css`
    height: ${spaces.xl1};
    background-color: ${colors.light};
    border-radius: ${radiuses.xlg};
    padding: 20px;
    font-family: 'Alef';
    font-weight: ${fontWeights.body};
    display: flex;
    justify-content: center;
    align-items: center;
`;