/* eslint-disable react-hooks/exhaustive-deps */
import { BackgroundEnum, DataStatusEnum, FooterEnum } from 'common/enums';
import { Avatar, BackgroundImage, BurgerMenu, CategoryIngredientsLayout, Footer, Header } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getAllIngredients, getIngredientsByType } from 'store/ingredients';

const CategoryIngredients = () => {
  
  const [allIngredients, setAllIngredients] = useState([]);
  const dispatch = useAppDispatch();
  const { status, ingredients } = useAppSelector(state => state.ingredients);
  const locale = useLocation();
  
  useEffect(() => {

    if(locale.pathname.split('/').pop() === 'all') dispatch(getAllIngredients(null))
    else dispatch(getIngredientsByType({type: locale.pathname.split('/').pop()}));

  }, [])

  useEffect(() => {    
    if(status === DataStatusEnum.SUCCESS) {
      setAllIngredients(ingredients);
    }
  }, [status]);

  return (
    <>
      <Header>  
        <Avatar avatar={null} />
      </Header>
      <BurgerMenu />
      <CategoryIngredientsLayout name={'Ingredients'} items={allIngredients} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <Footer type={FooterEnum.LIGHT}/>
    </>
  )
}

export { CategoryIngredients };