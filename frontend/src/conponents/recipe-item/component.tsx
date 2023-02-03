import React from 'react';
import * as styles from './styles';
import { RecipeItemProps } from './types';

const RecipeItem = ({ img, item }: RecipeItemProps) => {
    
  return (
    <div css={styles.wrapper}>
        <img src={img} alt="" />
        <div css={styles.capture}>
          {item.name}
          <div css={styles.more}>
            <p>Learn more</p>
            <i className="fa-solid fa-arrow-right"></i>
          </div>
        </div>
    </div>
  )
}

export { RecipeItem };