import React from 'react';
import { DefaultLayoutProps } from './types';
import * as styles from './styles';

const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  return (
    <div css={styles.layout}>{children}</div>
  )
}

export { DefaultLayout };