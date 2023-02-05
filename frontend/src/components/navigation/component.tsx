import React from 'react'
import { NavigationProps } from './types';
import * as styles from './styles';

const Navigation = ({ children }: NavigationProps) => {
  return (
    <div css={styles.wrapper}>
        <h3>My account</h3>
        <div css={styles.links}>{children}</div>
    </div>
  )
}

export { Navigation };