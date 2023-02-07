import React from 'react'
import { InputProps, SearchInputProps } from './types';
import * as styles from './styles';
import { IconColor, IconName } from 'common/enums';
import { IconButton } from '../icon-button';

const Input = ({ placeholder, value, setValue, type }: InputProps) => {
  return (
    <div css={styles.wrapper}>
        <input type={type} css={styles.input} value={value} onChange={(e) => setValue(e.target.value)} required />
        <label css={styles.label}>{placeholder}</label>
    </div>
  )
}

const SearchInput = ({ placeholder, value, setValue, callback }: SearchInputProps) => {
  return (
    <div css={styles.wrapper}>
        <input type='text' css={styles.inputSearch} value={value} onChange={(e) => setValue(e.target.value)} required />
        <label css={styles.label}>{placeholder}</label>
        <IconButton icon={IconName.SEARCH} color={IconColor.BLACK} callback={callback} />
    </div>
  )
}

export { Input, SearchInput };