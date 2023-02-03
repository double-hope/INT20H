import { BackgroundEnum, InputEnum } from 'common/enums';
import { BackgroundImage } from 'conponents/background';
import { BurgerMenu } from 'conponents/burger-menu';
import { RecipeLayout } from 'conponents/layouts/recipe-layout';
import { Avatar } from 'conponents/primitives/avatar';
import { Header } from 'conponents/primitives/header';
import { Input } from 'conponents/primitives/input';
import { RecipeItem } from 'conponents/recipe-item';
import React, { useState } from 'react';
const img1 = require('assets/images/meal1.png');
const img2 = require('assets/images/meal2.png');
const img3 = require('assets/images/meal3.png');
const img4 = require('assets/images/meal4.png');
const img5 = require('assets/images/meal5.png');
const img6 = require('assets/images/meal6.png');


const Home = () => {
  const arr = [
    {
      img:img1,
      name: 'Name1'
    }, 
    {
      img:img2,
      name: 'Name2'
    }, 
    {
      img:img3,
      name: 'Name3'
    }, 
    {
      img:img4,
      name: 'Name4'
    }, 
    {
      img:img5,
      name: 'Name5'
    }, 
    {
      img:img6,
      name: 'Name6'
    }, 
  ];
  const [filter, setFilter] = useState('');

  return (
    <>
      <Header>  
        <Input placeholder='' value={filter} setValue={setFilter} type={InputEnum.SEARCH}></Input>
        <Avatar avatar={null} />
      </Header>
      <BurgerMenu></BurgerMenu>
      <RecipeLayout>
        {
          arr.map(item => <RecipeItem key={item.name} img={item.img} item={item} />)
        }
      </RecipeLayout>
      <BackgroundImage type={BackgroundEnum.FILLED} />
    </>
  )
}

export { Home };