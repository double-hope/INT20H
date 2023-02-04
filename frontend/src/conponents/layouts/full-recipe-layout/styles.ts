import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const defaultWrapper = ({ colors, radiuses }: Theme) => css`
    width: 100%;
    background-color: ${colors.light};
    padding: 30px;
    border-radius: ${radiuses.xlg};
    border: 10px solid rgba(0, 0, 0, 0.2);
`;

export const layout = () => css`
    transform: translateY(30px);
    max-width: 1024px;
    margin: 0 auto;
    & *:not(i){
        font-family: 'Mohave';
    }
`;

export const heading = ({ fontSizes, fontWeights }: Theme) => css`
    width: 110%;
    text-align: center;
    font-size: ${fontSizes.heading};
    font-weight: ${fontWeights.h1};
    & p {
        margin: 10px;
    }
`;

export const item = ({ colors, radiuses, fontSizes }: Theme) => css`
    width: 100%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-gap: 10px;

    & > * {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background: ${colors.light};
        border-radius: ${radiuses.xlg};
        border: 10px solid rgba(0, 0, 0, 0.2);
        padding: 40px;
        font-size: ${fontSizes.icons};

        & ul {
            padding: 0;
            transform: translateX(-20px);
        }
        
        & h3 {
            font-size: ${fontSizes.category};
        }
    }


    & > *:first-of-type {
        grid-row: span 2;
        padding: 0;

        & img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: ${radiuses.lg};
        }
    }

`;

export const products = ({ colors, radiuses }: Theme) => css`
    
`;

export const recipe = ({ fontSizes, radiuses, colors }: Theme) => css`
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.icons};

    & ol {
        transform: translateX(-20px);
        list-style: none;
        counter-reset: item;
    }

    & li {
        counter-increment: item;
    }

    & li:not(li:last-child) {
        margin-bottom: 40px;
        
    }

    & li span {
        border-radius: ${radiuses.lg};
        border: 1px solid ${colors.text};
        padding: 10px 20px;
    }

    & li:before {
        margin-right: 10px;
        content: counter(item);
        background: ${colors.text};
        border-radius: ${radiuses.circle};
        color: ${colors.light};
        width: 1.2em;
        text-align: center;
        display: inline-block;
    }

    & h3 {
        font-size: ${fontSizes.category};
    }
    
`; 

export const video = ({ fontSizes }: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    & h3 {
        font-size: ${fontSizes.category};
    }

    & video {
        margin: 10px;
        width: 90%;
    }
`;

export const footer = ({ colors }: Theme) => css`
    & * {
        -webkit-text-stroke-color: white !important;
        color: ${colors.light} !important;
    }
`;
