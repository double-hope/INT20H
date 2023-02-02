import { css } from '@emotion/react';
import type { Theme } from '@emotion/react';  

export const modalWrapper = ({colors}: Theme) => css`
  background-color: ${colors.accent};
`;