import React from 'react';
import * as styles from './styles';

const Footer = () => {

  return (
    <div css={styles.footer}>
        <h1>Contacts</h1>
        
        <div css={styles.icons}>
          <a href='https://uk-ua.facebook.com/'><i className='fa-brands fa-facebook' /></a>
          <a href='https://www.instagram.com/'><i className='fa-brands fa-instagram' /></a>
          <a href='https://web.telegram.org/'><i className='fa-brands fa-telegram' /></a>
          <a href='https://www.youtube.com/'><i className='fa-brands fa-youtube' /></a>
          <a href='https://www.linkedin.com/'><i className='fa-brands fa-linkedin' /></a>
          <a href='https://twitter.com/'><i className='fa-brands fa-twitter' /></a>
        </div>

        <p>assistant@sevengroup.org</p>
        <p>Win Street, 4, 01030,</p>
        <p>Kyiv, Ukraine</p>
    </div>
  )
}

export { Footer };