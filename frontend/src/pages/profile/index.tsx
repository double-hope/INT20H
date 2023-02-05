import { BackgroundEnum } from 'common/enums'
import { BackgroundImage } from 'components/background'
import { BurgerMenu } from 'components/burger-menu'
import { Avatar } from 'components/primitives/avatar';
import React from 'react';

const Profile = () => {
  return (
    <div>
        <Avatar avatar={null}/>
        <BurgerMenu />
        <BackgroundImage type={BackgroundEnum.FILLED} />
    </div>
  )
}

export { Profile };
