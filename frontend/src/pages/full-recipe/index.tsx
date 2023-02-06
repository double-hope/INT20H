import { recipeBreakfastMock } from 'assets/mocks';
import { BackgroundEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { FullRecipeLayout } from 'components/layouts/full-recipe-layout';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React from 'react';
import { useParams } from 'react-router-dom';

const FullRecipe = () => {
  const { id } = useParams();

  const dispatch = useAppDispatch();
  const { meal } = useAppSelector(state => state.meals);

  return (
    <>
      {/* <FullRecipeLayout item={item}/> */}
      <BurgerMenu />
      <BackgroundImage type={BackgroundEnum.FILLED} />
    </>
  )
}

export { FullRecipe };