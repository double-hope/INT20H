import React from 'react';
import * as styles from './styles';
import { RecipeLayoutProps } from './types';

const RecipeLayout = ({ children }: RecipeLayoutProps) => {
  return (
    <div css={styles.wrapper}>
      <h1>Recipes</h1>
      <div css={styles.layout}>
          {children}
      </div>
    </div>
  )
}

export { RecipeLayout };