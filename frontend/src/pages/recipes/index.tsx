import { BackgroundEnum } from 'common/enums';
import { BackgroundImage } from 'conponents/background';
import { BurgerMenu } from 'conponents/burger-menu';
import { RecipesLayout } from 'conponents/layouts/recipes-layout';
import { Avatar } from 'conponents/primitives/avatar';
import React from 'react';

const Recipes = () => {
  return (
    <div>
      <Avatar avatar={null} />
      <RecipesLayout />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <BurgerMenu />
    </div>
  )
}

export { Recipes };