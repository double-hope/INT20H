import React, { useContext } from 'react'
import { NavigationProps } from './types';
import * as styles from './styles';
import { AuthContext } from 'context/auth';

const Navigation = ({ children }: NavigationProps) => {
  const { setAuth } = useContext(AuthContext); 

  const logout = () => {
    sessionStorage.removeItem('accessToken');
    sessionStorage.removeItem('refreshToken');
    sessionStorage.removeItem('userId');
    setAuth(false);
  }

  return (
    <div css={styles.wrapper}>
        <h3>My account</h3>
        <div css={styles.links}>{children}</div>
        <div css={styles.logOut} onClick={logout}>Log out</div>
    </div>
  )
}

export { Navigation };