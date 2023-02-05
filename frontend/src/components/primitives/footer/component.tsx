import React from 'react';
import * as styles from './styles';
import { SocialIcons } from '../social';
import { FooterProps } from './types';

const Footer = ({ type }: FooterProps) => {

  return (
    <div css={styles.footer} footer-type={type}>
        <h1>Contacts</h1>
        
        <SocialIcons />

        <p>assistant@sevengroup.org</p>
        <p>Win Street, 4, 01030,</p>
        <p>Kyiv, Ukraine</p>
    </div>
  )
}

export { Footer };