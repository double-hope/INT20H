import React from 'react'
import { CategoryIngredientsLayoutProps } from './types';
import * as styles from './styles';
import { FoodItem } from 'components/food-item';

const CategoryIngredientsLayout = ({ name, items }: CategoryIngredientsLayoutProps) => {
  return (
    <div css={styles.wrapper}>
      <h1>{name}</h1>
      <div css={styles.flex}>
        {items.map(item => <FoodItem img={item.img} name={item.name} added={true} />)}
      </div>
    </div>
  )
}

export { CategoryIngredientsLayout };