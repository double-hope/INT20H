/* eslint-disable react-hooks/exhaustive-deps */
import { BackgroundEnum, DataStatusEnum, FooterEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { CategoryIngredientsLayout } from 'components/layouts/category-ingredients-layout';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
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
      <CategoryIngredientsLayout name={'Ingredients'} items={allIngredients} myIngredientsLayout={false} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <Footer type={FooterEnum.LIGHT}/>
    </>
  )
}

export { CategoryIngredients };