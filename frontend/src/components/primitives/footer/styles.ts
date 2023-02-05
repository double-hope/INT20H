import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';
import { FooterEnum } from 'common/enums';

export const footer = ({ spaces, colors }: Theme) => css`
    text-align: center;
    & > h1 {
        margin: ${spaces.md};
        font-family: 'Montserrat';
        font-weight: 1200;
        font-size: 80px;
        color: ${colors.light};
        -webkit-text-stroke: 1px ${colors.text};
    }
    
    & > p {
        margin: 5px;
    }

    &[footer-type=${FooterEnum.LIGHT}] * {
        color: ${colors.light} !important;
        -webkit-text-stroke-color: ${colors.light} !important;
    }
`;
