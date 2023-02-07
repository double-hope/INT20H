/* eslint-disable react-hooks/exhaustive-deps */
import { BackgroundEnum, DataStatusEnum, FooterEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { IngredientsLayout } from 'components/layouts/ingredients-layout';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { getSavedIngredients } from 'store/profile';
import { MyIngredientItem } from 'components/my-ingredient-item';
import { MyIngredientsLayout } from 'components/layouts/my-ingredients-layout';

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
      <MyIngredientsLayout name='My ingredients'>
        <MyIngredientItem number={1} id={"121"} name={'name'} />
        <MyIngredientItem number={1} id={"121"} name={'name'} />
        <MyIngredientItem number={1} id={"121"} name={'name'} />
        <MyIngredientItem number={1} id={"121"} name={'name'} />
        <MyIngredientItem number={1} id={"121"} name={'name'} />
      
        {!!usersIngredients && usersIngredients.map((ingredient, key) => <MyIngredientItem key={ingredient.idIngredient} number={key + 1} id={ingredient.idIngredient} name={ingredient.strIngredient} />)}
      </MyIngredientsLayout>
      <Footer type={FooterEnum.LIGHT} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <BurgerMenu />
    </>
  )
}

export { MyIngredients };