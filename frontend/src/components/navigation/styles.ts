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