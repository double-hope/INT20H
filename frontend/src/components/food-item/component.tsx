import React from 'react'
import { FoodItemProps } from './types';
import * as styles from './styles';

const FoodItem = ({ name, img, added }: FoodItemProps) => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.image}>
            <img src={img} alt="" />
            <div added-item={`${added}`}> {added ? '+' : '-'} </div>
        </div>
        <div css={styles.name}>{name}</div>
    </div>
  )
}

export { FoodItem };