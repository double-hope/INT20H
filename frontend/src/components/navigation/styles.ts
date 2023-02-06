import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';

export const wrapper = ({ colors, radiuses, fontSizes }: Theme) => css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 50px;
    padding: 40px 50px 80px;
    gap: 40px;
    width: 100%;
    background-color: ${colors.light};
    border-radius: ${radiuses.xlg};
    & > * {
      font-family: 'Montserrat';
      font-size: ${fontSizes.category};  
    }
    
`;

export const links = () => css`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 20px;
`;

export const logOut = ({ colors, radiuses, fontSizes }: Theme) => css`
    background: ${colors.black};
    color: ${colors.light};
    padding: 20px 40px;
    border-radius: ${radiuses.lg};
    cursor: pointer;
    font-family: 'Alef';
    font-size: ${fontSizes.icons};

    &:hover {
      background: ${colors.accent};
    }
`;