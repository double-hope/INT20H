import { css } from '@emotion/react';
import { BackgroundEnum } from 'common/enums';
const img = require('assets/images/back.png');

export const background = () => css`
    background-image: url(${img});
    filter: blur(4px) brightness(40%);
    z-index: -1;

    &[background-type=${BackgroundEnum.CROPPED}] {
        position: absolute;
        width: 1024px;
        height: 400px;
        background-size: contain;
        background-repeat: no-repeat;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
    }

    &[background-type=${BackgroundEnum.FILLED}] {
        position: fixed;
        background-size: cover;
        background-attachment: fixed;
        transform: scale(1.05);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
    }
`;