import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = () => css`
    display: flex;
    gap: 10px;
    max-height: 200px;    
`;

export const image = ({ radiuses, colors }: Theme) => css`
    position: relative;
    flex-basis: 200px; 
    flex-grow: 1;
    border-radius: ${radiuses.xlg};
    background-color: ${colors.light};
    border: 10px solid rgba(0, 0, 0, 0.2);
    & > img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: ${radiuses.lg};
    }

    & > i {
        position: absolute;
        bottom: 10px;
        right: 10px;
    }
`;

export const info = ({ colors, radiuses }: Theme) => css`
    display: flex;
    flex-direction: column;
    gap: 10px;
    flex-grow: 3;
    border-radius: ${radiuses.xlg};
    background-color: ${colors.light};
    border: 10px solid rgba(0, 0, 0, 0.2);
    padding: 15px;
    text-align: center;

    & h3 {
        width: 100%;
        background-color: ${colors.accent};
        border-radius: ${radiuses.lg};
        color: ${colors.light};
        padding: 5px;
    }
`;

export const additionalInfo = ({ radiuses, colors, fontSizes }: Theme) => css`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-auto-rows: minmax(50px, auto);
    grid-gap: 10px;

    & span {
        border-radius: ${radiuses.lg};
        border: 1px solid ${colors.text};
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: ${fontSizes.icons};

        &:hover {
            background-color: ${colors.text};
            color: ${colors.light};
            cursor: pointer;
        }
    }
`;