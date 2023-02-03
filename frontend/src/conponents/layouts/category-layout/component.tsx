import React from 'react'
import { CategoryLayoutProps } from './types';
import { CategoryItem } from 'conponents/category-item';
import * as styles from './styles';

const CategoryLayout = ({ name, items }: CategoryLayoutProps) => {
  return (
    <div css={styles.wrapper}>
      <h1>{name}</h1>
      <div css={styles.flex}>
        {items.map(item => <CategoryItem img={item.img} name={item.name} />)}
      </div>
    </div>
  )
}

export { CategoryLayout };