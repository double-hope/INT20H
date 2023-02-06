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
          <PageLink pageUrl='meals' categoryName='Meals'/>
          <PageLink pageUrl='ingredients' categoryName='Ingredients'/>
          <PageLink pageUrl='shops' categoryName='Shops'/>
          <PageLink pageUrl='my-meals' categoryName='My meals'/>
          <PageLink pageUrl='my-ingredients' categoryName='My ingredients'/>
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
