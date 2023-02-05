import React from 'react';
import * as styles from './styles';

const BurgerMenuList = () => {
  return (
    <div css={styles.wrapper}>
        <ul>
            <li>All recipes</li>
            <li>My recipes</li>
            <li>My products</li>
            <li>Log out</li>
        </ul>
    </div>
  )
}

export { BurgerMenuList };