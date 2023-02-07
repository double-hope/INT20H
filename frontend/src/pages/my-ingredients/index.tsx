/* eslint-disable react-hooks/exhaustive-deps */
import { BackgroundEnum, DataStatusEnum, FooterEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { IngredientsLayout } from 'components/layouts/ingredients-layout';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
import { IngredientsItem } from 'components/ingredients-item';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { getSavedIngredients } from 'store/profile';

const MyIngredients = () => {
  const [ ingredients, setIngredients ] = useState([]);

  const dispatch = useAppDispatch();
  const { status, usersIngredients } = useAppSelector(state => state.profile);

  useEffect(() => {
    if(!ingredients.length)
      dispatch(getSavedIngredients(null));
  }, []);

  useEffect(() => {
    if(status === DataStatusEnum.SUCCESS) {
      setIngredients(usersIngredients);
    }
  }, [status]);
  
  return (
    <>
      <Header>
        <Avatar avatar={null} />
      </Header>
      <IngredientsLayout name='My ingredients'>
        {!!ingredients && ingredients.map(type => <IngredientsItem key={type.name} name={type.name} img={type.img} />)}
      </IngredientsLayout>
      <Footer type={FooterEnum.LIGHT} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <BurgerMenu />
    </>
  )
}

export { MyIngredients };