import React from 'react';
import * as styles from './styles';
import { AvatartProps } from './types';

const Avatar = ({ avatar }: AvatartProps) => {
  return (
    <>
        { avatar 
            ? <div css={styles.avatar} />
            : <i css={styles.icon} className='fa-solid fa-circle-user'></i>
        }
    </>
  )
}

export { Avatar };