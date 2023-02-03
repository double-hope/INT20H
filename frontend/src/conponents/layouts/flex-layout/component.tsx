import React from 'react'
import { FlexLayoutProps } from './types';
import * as styles from './styles';

const FlexLayout = ({children}: FlexLayoutProps) => {
  return (
    <div css={styles.layout}>{children}</div>
  )
}

export { FlexLayout };