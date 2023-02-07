import React, { useContext } from 'react';
import * as styles from './styles';
import { AvatartProps } from './types';
import { Icon } from '../icon';
import { IconColor, IconName } from 'common/enums';
import { useNavigate } from 'react-router-dom';
import { UserContext } from 'context/user';

const Avatar = ({ avatar }: AvatartProps) => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  return (
    <div css={styles.wrapper} onClick={() => navigate('/')}>
      {
        !!user.firstName
        ? <div css={styles.name}>{`${user.firstName} ${user.lastName}`}</div>
        : <>
          { avatar 
              ? <div css={styles.avatar} />
              : <Icon icon={IconName.USER} color={IconColor.WHITE} size={'md'}/>
          }
        </>
      }    
    </div>
  )
}

export { Avatar };