import { BackgroundEnum, FooterEnum } from 'common/enums';
import { BackgroundImage } from 'components/background';
import { BurgerMenu } from 'components/burger-menu';
import { MyMealLayout } from 'components/layouts/my-meal-layout';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useEffect } from 'react';
import { getSavedMeals } from 'store/profile';

const MyMeals = () => {
  
  const dispatch = useAppDispatch();
  const { usersMeals } = useAppSelector(state => state.profile);

  useEffect(() => {
    dispatch(getSavedMeals(null));
  }, []);

  return (
    <>
      <Header>  
        <Avatar avatar={null} />
      </Header>
      <BurgerMenu />
      {!!usersMeals && <MyMealLayout meals={usersMeals} />}
      <BackgroundImage type={BackgroundEnum.FILLED} />
      <Footer type={FooterEnum.LIGHT}/>
    </>
  )
}

export { MyMeals };