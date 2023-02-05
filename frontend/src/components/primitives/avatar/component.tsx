import React from 'react';
import * as styles from './styles';
import { AvatartProps } from './types';
import { Icon } from '../icon';
import { IconColor, IconName } from 'common/enums';

const Avatar = ({ avatar }: AvatartProps) => {
  return (
    <div css={styles.wrapper}>
        { avatar 
            ? <div css={styles.avatar} />
            : <Icon icon={IconName.USER} color={IconColor.WHITE} size={'md'}/>
        }
    </div>
  )
}

export { Avatar };