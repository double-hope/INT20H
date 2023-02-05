import React, { useState } from 'react'
import { FoodItemProps } from './types';
import * as styles from './styles';

const FoodItem = ({ name, img, added, myIngredients }: FoodItemProps) => {
  const [isAdded, setIsAdded] = useState(added);

  return (
    <div css={styles.wrapper}>
        <div css={styles.image}>
            <img src={img} alt="" />
            {!myIngredients && <div added-item={`${isAdded}`} onClick={() => setIsAdded(!isAdded)}> {isAdded ? '-' : '+'} </div>}
        </div>
        <div css={styles.name}>{name}</div>
    </div>
  )
}

export { FoodItem };