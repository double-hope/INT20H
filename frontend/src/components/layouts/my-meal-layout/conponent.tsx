import React from 'react';
import * as styles from './styles';
import { RecipeItem } from 'components/recipe-item';
import { MealLayoutProps } from './types';

const MyMealLayout = ({meals}: MealLayoutProps) => {
  
  return (
    <div css={styles.wrapper}>
      <h1>My meals</h1>

      <div css={styles.layout}>
        {
          meals.map(meal => <RecipeItem key={meal.strMeal} img={meal.strMealThumb} item={meal} />)
        }
      </div>
    </div>
  )
}

export { MyMealLayout };