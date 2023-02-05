import { BackgroundEnum, FooterEnum } from 'common/enums'
import { BackgroundImage } from 'components/background'
import { BurgerMenu } from 'components/burger-menu'
import { DefaultLayout } from 'components/layouts/default-layout';
import { Navigation } from 'components/navigation';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { PageLink } from 'components/primitives/page-link';
import React from 'react';

const Profile = () => {
  return (
    <>
      <DefaultLayout>
        <Navigation>
          <PageLink pageUrl='recipes' categoryName='Recipes'/>
          <PageLink pageUrl='products' categoryName='Products'/>
          <PageLink pageUrl='shops' categoryName='Shops'/>
          <PageLink pageUrl='my-recipes' categoryName='My recipes'/>
          <PageLink pageUrl='my-products' categoryName='My products'/>
        </Navigation>
        <Footer type={FooterEnum.LIGHT} />
      </DefaultLayout>

      <Avatar avatar={null}/>
      <BurgerMenu />
      <BackgroundImage type={BackgroundEnum.FILLED} />
    </>
    
  )
}

export { Profile };
