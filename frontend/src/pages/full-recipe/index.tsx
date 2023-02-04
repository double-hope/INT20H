import { recipeBreakfastMock } from 'assets/mocks';
import { BackgroundEnum } from 'common/enums';
import { BackgroundImage } from 'conponents/background';
import { BurgerMenu } from 'conponents/burger-menu';
import { FullRecipeLayout } from 'conponents/layouts/full-recipe-layout';
import React from 'react';
import { useParams } from 'react-router-dom';

const FullRecipe = () => {
  const { id } = useParams();

  const item = recipeBreakfastMock.find(item => item.id === id);

  return (
    <>
      <FullRecipeLayout item={item}/>
      <BurgerMenu />
      <BackgroundImage type={BackgroundEnum.FILLED} />
    </>
  )
}

export { FullRecipe };