/* eslint-disable react-hooks/exhaustive-deps */
import { BackgroundEnum, DataStatusEnum, FooterEnum } from 'common/enums'
import { BackgroundImage } from 'components/background'
import { BurgerMenu } from 'components/burger-menu'
import { DefaultLayout } from 'components/layouts/default-layout';
import { Navigation } from 'components/navigation';
import { Avatar } from 'components/primitives/avatar';
import { Footer } from 'components/primitives/footer';
import { Header } from 'components/primitives/header';
import { PageLink } from 'components/primitives/page-link';
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
          <PageLink pageUrl='grosseries' categoryName='Grosseries'/>
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
