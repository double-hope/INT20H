import React from 'react'
import { FlexLayoutProps } from './types';
import * as styles from './styles';
import { FlexLayoutEnum } from 'common/enums';

const FlexLayout = ({type, children}: FlexLayoutProps) => {
  return (
    <div css={ type === FlexLayoutEnum.STRETCH ? styles.stretchLayout : styles.defaultLayout}>{children}</div>
  )
}

export { FlexLayout };