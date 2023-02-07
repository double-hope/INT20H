import { BackgroundEnum, FooterEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { GrosseriesLayout } from 'components/layouts/grosseries-layout';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
import React from 'react'

const Grosseries = () => {
  return (
    <div>
        <Header>
          <Avatar avatar={null} />
        </Header>
        <GrosseriesLayout />
        <BackgroundImage type={BackgroundEnum.FILLED}/>
        <BurgerMenu />
        <Footer type={FooterEnum.LIGHT}/>
    </div>
  )
}

export { Grosseries };