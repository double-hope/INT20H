import React from 'react';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';

const BurgerMenuList = () => {
  const navigate = useNavigate();

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
  }

  return (
    <div css={styles.wrapper}>
        <ul>
            <li onClick={() => navigate('/')}>My account</li>
            <li onClick={() => navigate('/meals')}>Meals</li>
            <li onClick={() => navigate('/my-meals')}>My meals</li>
            <li onClick={() => navigate('/ingredients')}>Ingredients</li>
            <li onClick={() => navigate('/my-ingredients')}>My ingredients</li>
            <li onClick={() => navigate('/')}>Grosseries</li>
            <li onClick={logout}>Log out</li>
        </ul>
    </div>
  )
}

export { BurgerMenuList };