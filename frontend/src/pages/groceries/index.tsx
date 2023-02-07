import { BackgroundEnum, FooterEnum } from 'common/enums';
import { BackgroundImage, Header, Footer, Avatar, BurgerMenu, GroceriesLayout } from 'components';
import React from 'react';

const Groceries = () => {
  return (
    <div>
        <Header>
          <Avatar avatar={null} />
        </Header>
        <GroceriesLayout />
        <BackgroundImage type={BackgroundEnum.FILLED}/>
        <BurgerMenu />
        <Footer type={FooterEnum.LIGHT}/>
    </div>
  )
}

export { Groceries };