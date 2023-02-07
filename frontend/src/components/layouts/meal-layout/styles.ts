import { Theme, css } from '@emotion/react';

export const wrapper = () => css`
    width: 80%;
    max-width: 1024px;
    margin: 0 auto;
    color: white;
    font-size: 2rem;
`;

export const layout = () => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(150px, auto);
    gap: 20px;
    width: 100%;

    & div:nth-of-type(3n + 2) {
        grid-row: span 2;
    }

    @media all and (max-width: 800px) {
        grid-template-columns: 1fr ;
    }
`;

export const alphabet = ({colors, radiuses}: Theme) => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    background-color: ${colors.light};
    border-radius: ${radiuses.xlg};
    margin-bottom: 20px;
    padding: 20px;

    & div {
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${colors.black};
        width: 50px;
        height: 50px;
        cursor: pointer;

        &[choosen-letter='true'] {
            border: 5px solid ${colors.accent};
        }
    }
`;

export const searchLayout = ({colors, radiuses}: Theme) => css`
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 20px 0;
    text-align: center;

    & div:last-child {
        background-color: ${colors.black};
        border: 10px solid ${colors.light};
        border-radius: ${radiuses.xlg};
        cursor: pointer;
    }

    @media all and (max-width: 900px) {     
        grid-template-columns: 1fr;

        & * {
            margin: 10px;
        }
    }
`;