import React from 'react'
import { ButtonLayoutProps } from './types';
import * as styles from './styles';

const ButtonLayout = ({children}: ButtonLayoutProps) => {
  return (
    <div css={styles.layout}>{children}</div>
  )
}

export { ButtonLayout };