import React from 'react';
import { BackgroundProps } from './types';
import * as styles from './styles';

const BackgroundImage = ({type}: BackgroundProps) => {
  return (
    <div css={styles.background} background-type={type}></div>
  )
}

export { BackgroundImage }; 