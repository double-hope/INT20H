import { recipeMock } from 'assets/mocks';
import { BackgroundEnum, InputEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { RecipeLayout } from 'components/layouts/recipe-layout';
import { Avatar } from 'components/primitives/avatar';
import { Header } from 'components/primitives/header';
import { Input } from 'components/primitives/input';
import { RecipeItem } from 'components/recipe-item';
import React, { useState } from 'react';

const Recipes = () => {
  
  const [filter, setFilter] = useState('');
  return (
    <>
      <Header>  
        <Input placeholder='' value={filter} setValue={setFilter} type={InputEnum.SEARCH} />
        <Avatar avatar={null} />
      </Header>
      <BurgerMenu />
      <RecipeLayout>
        {
          recipeMock.map(item => <RecipeItem key={item.name} img={item.img} item={item} />)
        }
      </RecipeLayout>
      <BackgroundImage type={BackgroundEnum.FILLED} />
    </>
  )
}

export { Recipes };