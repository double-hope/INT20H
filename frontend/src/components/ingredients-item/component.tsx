import React from 'react';
import { IngredientsItemProps } from './types';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';

const IngredientsItem = ({ name, img }: IngredientsItemProps) => {
  const navigate = useNavigate();

  const click = () => {
    navigate(`${name}`);
  }

  return (
    <div css={styles.wrapper} onClick={click}>
        <img src={img} alt="" />
        <h3>{name}</h3>
        <div />
    </div>
    
  )
}

export { IngredientsItem };