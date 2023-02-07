import React from 'react'
import { CategoryIngredientsLayoutProps } from './types';
import * as styles from './styles';
import { MyIngredientItem } from 'components/my-ingredient-item';
import { useNavigate } from 'react-router-dom';

const CategoryIngredientsLayout = ({ name, items, myIngredientsLayout }: CategoryIngredientsLayoutProps) => { 
  
  const navigate = useNavigate();

  return (
    <div css={styles.wrapper}>
      <div css={styles.heading}>
        <h1>{name}</h1>
        <div css={styles.button} onClick={() => navigate('/my-ingredients')}>
          My ingredients
        </div>
      </div>
      
      <div css={styles.flex}>
        {items && items.map((item, key) => <MyIngredientItem key={item.idIngredient} number={key + 1} id={item.idIngredient} name={item.strIngredient} />)}
      </div>
    </div>
  )
}

export { CategoryIngredientsLayout };