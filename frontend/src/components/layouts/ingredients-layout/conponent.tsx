import React from 'react';
import * as styles from './styles';
import { IngredientsLayoutProps } from './types';

const IngredientsLayout = ({ children }: IngredientsLayoutProps) => {
  return (
    <div css={styles.wrapper}>
      <h1>Ingredients</h1>
      <div css={styles.layout}>
          {children}
      </div>
    </div>
  )
}

export { IngredientsLayout };