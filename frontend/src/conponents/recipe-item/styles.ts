import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors, radiuses }: Theme) => css`
    position: relative;
    border: 10px solid ${colors.background};
    border-radius: ${radiuses.lg};
    z-index: 1;

    & img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 30px;
    }

    &:hover {
        & > * {
            opacity: 1;
        }
    }
`;

export const capture = ({ colors, radiuses }: Theme) => css`
    transition: 0.2s ease-out; 
    opacity: 0;
    position: absolute;
    background-color: rgba(176, 63, 0, 0.8);
    border-radius: 30px;
    width: 100%;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    & p {
        font-family: 'Mohave';
    }
`;

export const more = () => css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: 100;
    cursor: pointer;
`;