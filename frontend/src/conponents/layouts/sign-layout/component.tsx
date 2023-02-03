import React from 'react';
import { SignLayoutProps } from './types';
import * as styles from './styles';

const SignLayout = ({ children }: SignLayoutProps) => {
  return (
    <div css={styles.layout}>{children}</div>
  )
}

export { SignLayout };