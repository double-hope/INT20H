import React, { useState } from 'react'
import { CategoryIngredientsLayoutProps } from './types';
import * as styles from './styles';
import { FoodItem } from 'components/food-item';
import { ingredientImg } from 'assets/images/ingredients';

const CategoryIngredientsLayout = ({ name, items, myIngredientsLayout }: CategoryIngredientsLayoutProps) => { 

  const [myIngredients, setMyIngredients] = useState(myIngredientsLayout);
  
  return (
    <div css={styles.wrapper}>
      <div css={styles.heading}>
        <h1>{myIngredients ? `My ${name}` : `${name}`}</h1>
        <div css={styles.button} onClick={() => setMyIngredients(!myIngredients)}>
          {myIngredients ? `${name}` : `My ${name}`}
        </div>
      </div>
      
      <div css={styles.flex}>
        {items && items.map(item => <FoodItem key={item.idIngredient} id={item.idIngredient} name={item.strIngredient} added={false} myIngredients={myIngredients} />)}
      </div>
    </div>
  )
}

export { CategoryIngredientsLayout };