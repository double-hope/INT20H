import { css } from '@emotion/react';

export const wrapper = () => css`
    & img {
        width: 200px;
        height: 200px;
        object-fit: cover;
    }

    & * {
        font-family: 'Mohave';
        font-weight: 600;
    }
`;