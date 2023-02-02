import { css } from '@emotion/react';
const img = require('assets/images/back.png');

export const background = () => css`
    background-image: url(${img});
    width: 1400px;
    height: 500px;
    background-size: contain;
    background-repeat: no-repeat;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    filter: blur(4px) brightness(40%);
    z-index: 0;
`;