import { recipeMock } from 'assets/mocks';
import { BackgroundEnum, InputEnum } from 'common/enums';
import { BackgroundImage } from 'conponents/background';
import { BurgerMenu } from 'conponents/burger-menu';
import { RecipeLayout } from 'conponents/layouts/recipe-layout';
import { Avatar } from 'conponents/primitives/avatar';
import { Header } from 'conponents/primitives/header';
import { Input } from 'conponents/primitives/input';
import { RecipeItem } from 'conponents/recipe-item';
import React, { useState } from 'react';

const Home = () => {
  
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

export { Home };