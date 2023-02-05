import { BackgroundEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { Avatar } from 'components/primitives/avatar';
import React from 'react';

const Products = () => {
  return (
    <div>
      <Avatar avatar={null} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <BurgerMenu />
    </div>
  )
}

export { Products };