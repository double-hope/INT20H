import { BackgroundEnum, FooterEnum } from 'common/enums';
import { Header, Footer, Avatar, MealLayout, BurgerMenu, BackgroundImage } from 'components';
import React from 'react';

const Meals = () => {

  return (
    <>
      <Header>  
        <Avatar avatar={null} />
      </Header>
      <MealLayout />
      <BurgerMenu />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <Footer type={FooterEnum.LIGHT}/>
    </>
  )
}

export { Meals };