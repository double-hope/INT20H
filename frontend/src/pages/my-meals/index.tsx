import { BackgroundEnum, FooterEnum } from 'common/enums';
import { Avatar, Footer, Header, MyMealLayout, BurgerMenu, BackgroundImage } from 'components';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useEffect } from 'react';
import { getSavedMeals } from 'store/profile';

const MyMeals = () => {
  
  const dispatch = useAppDispatch();
  const { usersMeals } = useAppSelector(state => state.profile);

  useEffect(() => {
    dispatch(getSavedMeals(null));
  // eslint-disable-next-line react-hooks/exhaustive-deps
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