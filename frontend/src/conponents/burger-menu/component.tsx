import React, { useCallback, useState } from 'react';
import * as styles from './styles';
import { BurgerMenuList } from './burger-menu-list';
import { SocialIcons } from 'conponents/primitives/social';
import { useOutsideClick } from 'hooks/use-outside-click';

const BurgerMenu = () => {
  
  const [style, setStyle] = useState({});


  const handleClickOutside = useCallback(() => {
    setStyle({});
    if(bodyRef.current) bodyRef.current.style.transform = 'translateX(-80%)';
  }, []);
  
  const bodyRef = useOutsideClick(handleClickOutside);

  const showMenu = () => {
    setStyle({opacity: '0'});
    if(bodyRef.current) bodyRef.current.style.transform = 'translateX(0)';
  }

  return (
    <div ref={bodyRef} css={styles.burgerMenu}>
      <div css={styles.hiddenWrapper}>
        <h1>The Sunday Bite</h1>
        <BurgerMenuList />
        <SocialIcons />
      </div>

      <div css={styles.triggerWrapper} style={style}>
        <div onClick={showMenu} css={styles.menuIcon}>
           <i className="fa-solid fa-bars"></i> 
        </div>
        <h1>The Sunday Bite</h1>
      </div>    
    </div>
  )
}

export { BurgerMenu };