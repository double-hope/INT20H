import React, { useState } from 'react';
import { ProductFlagItemProps } from './types';
import * as styles from './styles';

const ProductFlagItem = ({ amount, name }: ProductFlagItemProps) => {
    const [isAdded, setIsAdded] = useState(false);

  return (
    <div css={styles.wrapper}>
        <div css={styles.amount}>{amount}</div>
        <div css={styles.name}>{name}</div>
        <div css={styles.flag} added-item={`${isAdded}`} onClick={() => setIsAdded(!isAdded)}> {isAdded ? '-' : '+'} </div>
    </div>
  )
}

export { ProductFlagItem };