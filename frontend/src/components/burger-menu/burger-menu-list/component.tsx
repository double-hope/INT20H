import React, { useContext } from 'react';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from 'context/auth';

const BurgerMenuList = () => {
  const navigate = useNavigate();
  const { setAuth } = useContext(AuthContext);

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    setAuth(false);
  }

  return (
    <div css={styles.wrapper}>
        <ul>
            <li onClick={() => navigate('/')}>My account</li>
            <li onClick={() => navigate('/meals')}>Meals</li>
            <li onClick={() => navigate('/my-meals')}>My meals</li>
            <li onClick={() => navigate('/ingredients')}>Ingredients</li>
            <li onClick={() => navigate('/my-ingredients')}>My ingredients</li>
            <li onClick={() => navigate('/grosseries')}>Grosseries</li>
            <li onClick={logout}>Log out</li>
        </ul>
    </div>
  )
}

export { BurgerMenuList };