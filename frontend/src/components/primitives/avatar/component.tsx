import React from 'react';
import * as styles from './styles';
import { AvatartProps } from './types';
import { Icon } from '../icon';
import { IconColor, IconName } from 'common/enums';
import { useNavigate } from 'react-router-dom';

const Avatar = ({ avatar }: AvatartProps) => {
  const navigate = useNavigate();

  return (
    <div css={styles.wrapper} onClick={() => navigate('/')}>
        { avatar 
            ? <div css={styles.avatar} />
            : <Icon icon={IconName.USER} color={IconColor.WHITE} size={'md'}/>
        }
    </div>
  )
}

export { Avatar };