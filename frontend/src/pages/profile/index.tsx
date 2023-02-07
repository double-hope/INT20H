/* eslint-disable react-hooks/exhaustive-deps */
import { BackgroundEnum, DataStatusEnum, FooterEnum } from 'common/enums'
import { BurgerMenu, BackgroundImage, DefaultLayout, Navigation, Avatar, Footer, Header, PageLink } from 'components'
import { UserContext } from 'context/user';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import React, { useContext, useEffect } from 'react';
import { getUserById } from 'store/users';

const Profile = () => {
  const { setUser } = useContext(UserContext);
  const dispatch = useAppDispatch();
  const userState = useAppSelector(state => state.users);

  useEffect(() => {
    dispatch(getUserById({userId: sessionStorage.getItem('userId')}))
  }, []);

  useEffect(() => {
    if(userState.status === DataStatusEnum.SUCCESS) {
      setUser(userState.user);
    }
  }, [userState.user])
  
  return (
    <>
      <Header>
        <Avatar avatar={null} />
      </Header>
      <DefaultLayout>
        <Navigation>
          <PageLink pageUrl='meals' categoryName='Meals'/>
          <PageLink pageUrl='ingredients' categoryName='Ingredients'/>
          <PageLink pageUrl='groceries' categoryName='Groceries'/>
          <PageLink pageUrl='my-meals' categoryName='My meals'/>
          <PageLink pageUrl='my-ingredients' categoryName='My ingredients'/>
        </Navigation>
        <Footer type={FooterEnum.LIGHT} />
      </DefaultLayout>
      <BurgerMenu />
      <BackgroundImage type={BackgroundEnum.FILLED} />
    </>
    
  )
}

export { Profile };
