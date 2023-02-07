import React from 'react';
import * as styles from './styles';
import { IngredientsLayoutProps } from './types';
import { useNavigate } from 'react-router-dom';

const MyIngredientsLayout = ({ name, children }: IngredientsLayoutProps) => {
  const navigate = useNavigate();
  return (
    <div css={styles.wrapper}>
      <div css={styles.heading}>
        <h1>{name}</h1>
        <div css={styles.button} onClick={() => navigate('/ingredients/all')}>
          Ingredients
        </div>
      </div>
      <div css={styles.layout}>
          {children}
      </div>
    </div>
  )
}

export { MyIngredientsLayout };