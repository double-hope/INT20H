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
    position: relative;
    width: 110%;
    text-align: center;
    font-size: ${fontSizes.heading};
    font-weight: ${fontWeights.h1};
    & p {
        margin: 10px;
    }
`;

export const marker = ({colors, fontSizes}: Theme) => css`
    position: absolute;
    right: 30px;
    top: -10px;
    cursor: pointer;

    & div:first-of-type {
        font-size: ${fontSizes.category};
        display: flex;
        justify-content: center;
        align-items: end;
        background-color: ${colors.black};
        color: ${colors.light};
        height: 100px;
        
        &[saved-dish='true'] {
            background-color: ${colors.accent};
        }
    }
`; 


export const triangle = ({colors}: Theme) => css`
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 50px 50px 0 50px;
    border-color: ${colors.black} transparent transparent transparent;
    
    &[saved-dish='true'] {
        border-color: ${colors.accent} transparent transparent transparent;
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

export const products = ({ fontSizes, radiuses, colors }: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: ${fontSizes.icons};

    & h3 {
        font-size: ${fontSizes.category};
    }
`;

export const productsAmount = ({ fontSizes, radiuses, colors }: Theme) => css`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
    font-size: ${fontSizes.icons};

    & h3 {
        font-size: ${fontSizes.category};
    }
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
        width: 90%;
    }

    & li {
        position: relative;
        counter-increment: item;
    }

    & li:not(li:last-child) {
        margin-bottom: 40px;
        
    }

    & li p {
        border-radius: ${radiuses.lg};
        border: 1px solid ${colors.text};
        padding: 10px 20px;
    }

    & li:before {
        position: absolute;
        margin-right: 10px;
        content: counter(item);
        background: ${colors.text};
        border-radius: ${radiuses.circle};
        color: ${colors.light};
        width: 1.2em;
        text-align: center;
        display: inline-block;
        left: -40px;
        top: 50%;
        transform: translateY(-50%);
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

export const link = ({colors}: Theme) => css`
    color: ${colors.black};
    text-decoration: none;

    &:hover {
        color: ${colors.accent};
        text-decoration: underline;
    }

`;