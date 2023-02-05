import React from 'react'
import { InputProps } from './types';
import * as styles from './styles';

const Input = ({ placeholder, value, setValue, type }: InputProps) => {
  return (
    <div css={styles.wrapper}>
        <input type={type} css={styles.input} value={value} onChange={(e) => setValue(e.target.value)} required />
        <label css={styles.label}>{placeholder}</label>
    </div>
  )
}

export { Input };