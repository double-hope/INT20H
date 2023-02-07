import { BackgroundEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { RecipesLayout } from 'components/layouts/recipes-layout';
import { Avatar } from 'components/primitives/avatar';
import { Header } from 'components/primitives/header';
import React from 'react';

const CategoryRecipes = () => {
  return (
    <div>
      <Header>
        <Avatar avatar={null} />
      </Header>
      <RecipesLayout />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <BurgerMenu />
    </div>
  )
}

export { CategoryRecipes };