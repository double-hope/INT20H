import React from 'react';
import * as styles from './styles';
import { MealLayoutProps } from './types';

const MealLayout = ({ children }: MealLayoutProps) => {
  return (
    <div css={styles.wrapper}>
      <h1>Meals</h1>
      <div css={styles.layout}>
          {children}
      </div>
    </div>
  )
}

export { MealLayout };