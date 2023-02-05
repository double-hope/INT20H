import { BackgroundEnum } from 'common/enums'
import { BackgroundImage } from 'components/background'
import { BurgerMenu } from 'components/burger-menu'
import { Avatar } from 'components/primitives/avatar';
import { PageLink } from 'components/primitives/page-link';
import React from 'react';

const Profile = () => {
  return (
    <div>

      <div>
        <PageLink pageUrl='recipes' categoryName='Recipes'/>
        <PageLink pageUrl='products' categoryName='Products'/>
        <PageLink pageUrl='shops' categoryName='Shops'/>
        <PageLink pageUrl='my-recipes' categoryName='My recipes'/>
        <PageLink pageUrl='my-products' categoryName='My products'/>
      </div>

      <Avatar avatar={null}/>
      <BurgerMenu />
      <BackgroundImage type={BackgroundEnum.FILLED} />
    </div>
  )
}

export { Profile };
