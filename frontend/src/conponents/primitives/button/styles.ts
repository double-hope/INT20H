import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { ButtonEnum } from 'common/enums';

export const button = ({ colors, radiuses, spaces, fontSizes, fontWeights }: Theme) => css`
    border-radius: ${radiuses.md};
    border: none;
    padding: ${spaces.md} ${spaces.lg};
    font-size: ${fontSizes.button};
    font-weight: ${fontWeights.button};
    transition: .15s all;
    background-color: ${colors.light};
    color: ${colors.text};

    &:hover {
        background-color: ${colors.lightHover};
        cursor: pointer;
    }


    &[button-variant=${ButtonEnum.ACCENT}] {
        background-color: ${colors.accent};
        color: ${colors.background};

       &:hover {
        background-color: ${colors.accentHover};
           /*   box-shadow: 0 0 .2rem #fff,
                0 0 .2rem #fff,
                0 0 .8rem #FFAB2D,
                0 0 .5rem #FFAB2D,
                0 0 1rem #FFAB2D;*/
        } 
    }
`;