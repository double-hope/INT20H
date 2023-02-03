import React from 'react';
import * as styles from './styles';
import { RecipeItemProps } from './types';

const RecipeItem = ({ img, item }: RecipeItemProps) => {
    
  return (
    <div css={styles.wrapper}>
        <img src={img} alt="" />
    </div>
  )
}

export { RecipeItem };