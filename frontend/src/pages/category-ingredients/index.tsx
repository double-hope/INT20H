import { categoryMock } from 'assets/mocks';
import { BackgroundEnum, FooterEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { CategoryIngredientsLayout } from 'components/layouts/category-ingredients-layout';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
import React from 'react';

const CategoryIngredients = () => {
  
  return (
    <>
      <Header>  
        <Avatar avatar={null} />
      </Header>
      <BurgerMenu />
      <CategoryIngredientsLayout name={'Ingredients'} items={categoryMock} myIngredientsLayout={false} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <Footer type={FooterEnum.LIGHT}/>
    </>
  )
}

export { CategoryIngredients };