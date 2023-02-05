import React from 'react'
import { ButtonProps } from './types';
import * as styles from './styles';

const Button = ({variant, onClick, children}: ButtonProps) => {
  return (
    <button css={styles.button} button-variant={variant} onClick={onClick}>{children}</button>
  )
}

export { Button };