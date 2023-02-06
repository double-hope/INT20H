import { recipeMock } from 'assets/mocks';
import { BackgroundEnum, FooterEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { IngredientsLayout } from 'components/layouts/ingredients-layout';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
import { IngredientsItem } from 'components/ingredients-item';
import React from 'react';

const Ingredients = () => {
  return (
    <>
      <Header>
        <Avatar avatar={null} />
      </Header>
      <IngredientsLayout>
        {recipeMock.map(item => <IngredientsItem name={item.name} img={item.img} />)}
      </IngredientsLayout>
      <Footer type={FooterEnum.LIGHT} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <BurgerMenu />
    </>
  )
}

export { Ingredients };