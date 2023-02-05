import React from 'react';
import { CategoryItemProps } from './types';
import * as styles from './styles';

const CategoryItem = ({ img, name }: CategoryItemProps) => {
  return (
    <div css={styles.wrapper}>
        <img src={img} alt="" />
        <p>{name}</p>
    </div>
  )
}

export { CategoryItem };