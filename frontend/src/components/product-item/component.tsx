import React from 'react';
import { ProductItemProps } from './types';
import * as styles from './styles';

const ProductItem = ({ name, img }: ProductItemProps) => {
  return (
    <div css={styles.wrapper}>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div />
    </div>
  )
}

export { ProductItem };