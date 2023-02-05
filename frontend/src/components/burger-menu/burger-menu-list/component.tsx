import React from 'react';
import * as styles from './styles';

const BurgerMenuList = () => {
  return (
    <div css={styles.wrapper}>
        <ul>
            <li>My account</li>
            <li>Meals</li>
            <li>My meals</li>
            <li>Ingredients</li>
            <li>My ingredients</li>
            <li>Grosseries</li>
            <li>Log out</li>
        </ul>
    </div>
  )
}

export { BurgerMenuList };