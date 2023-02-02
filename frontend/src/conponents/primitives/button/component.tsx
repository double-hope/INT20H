import React from 'react'
import { ButtonProps } from './types';
import * as styles from './styles';

const Button = ({variant, children}: ButtonProps) => {
  return (
    <button css={styles.button} button-variant={variant} onClick={e => e.preventDefault()}>{children}</button>
  )
}

export { Button };