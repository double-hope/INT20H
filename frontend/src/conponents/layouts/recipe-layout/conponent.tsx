import React from 'react';
import * as styles from './styles';
import { RecipeLayoutProps } from './types';

const RecipeLayout = ({ children }: RecipeLayoutProps) => {
  return (
    <div css={styles.layout}>
        {children}
    </div>
  )
}

export { RecipeLayout };