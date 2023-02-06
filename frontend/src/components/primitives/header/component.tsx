import React from 'react';
import * as styles from './styles';
import { HeaderProps } from './types';

const Header = ({children}: HeaderProps) => {
  return (
    <div css={styles.header}>
        {children}
    </div>
  )
}

export { Header };