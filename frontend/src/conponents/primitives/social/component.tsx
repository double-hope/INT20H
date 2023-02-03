import React from 'react';
import * as styles from './styles';

const SocialIcons = () => {
  return (
    <div css={styles.icons}>
        <a href='https://uk-ua.facebook.com/'><i className='fa-brands fa-facebook' /></a>
        <a href='https://www.instagram.com/'><i className='fa-brands fa-instagram' /></a>
        <a href='https://web.telegram.org/'><i className='fa-brands fa-telegram' /></a>
        <a href='https://www.youtube.com/'><i className='fa-brands fa-youtube' /></a>
        <a href='https://www.linkedin.com/'><i className='fa-brands fa-linkedin' /></a>
        <a href='https://twitter.com/'><i className='fa-brands fa-twitter' /></a>
    </div>
  )
}
export { SocialIcons };