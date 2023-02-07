/* eslint-disable react-hooks/exhaustive-deps */
import { BackgroundEnum, DataStatusEnum, FooterEnum } from 'common/enums';
import { IngredientsItem, Header, Footer, Avatar, IngredientsLayout, BurgerMenu, BackgroundImage } from 'components';
import React, { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { getAllIngredientsTypes } from 'store/ingredients';
import { ingredientsImages } from 'assets/images/ingredients';

const Ingredients = () => {
  const [ allTypes, setAllTypes ] = useState([]);

  const dispatch = useAppDispatch();
  const { status, types } = useAppSelector(state => state.ingredients);

  useEffect(() => {
    if(!allTypes.length)
      dispatch(getAllIngredientsTypes(null));
  }, []);

  useEffect(() => {
    if(status === DataStatusEnum.SUCCESS) {
      setAllTypes([]);
    }
  }, [status]);

  useEffect(() => {
    if(status === DataStatusEnum.SUCCESS && !allTypes.length) {
      types.map((item, key) => setAllTypes((prev) => [...prev, {name: item, img: ingredientsImages[key]}]));
    }
  }, [allTypes]);
  
  return (
    <>
      <Header>
        <Avatar avatar={null} />
      </Header>
      <IngredientsLayout name='Ingredients'>
        <IngredientsItem key={0} name='All ingredients' img={ingredientsImages[ingredientsImages.length - 1]} />
        {allTypes.map(type => <IngredientsItem key={type.name} name={type.name} img={type.img} />)}
      </IngredientsLayout>
      <Footer type={FooterEnum.LIGHT} />
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <BurgerMenu />
    </>
  )
}

export { Ingredients };