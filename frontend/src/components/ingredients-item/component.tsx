import React from 'react';
import { IngredientsItemProps } from './types';
import * as styles from './styles';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from 'hooks/store';
import { getAllIngredients, getIngredientsByType } from 'store/ingredients';

const IngredientsItem = ({ name, img }: IngredientsItemProps) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const click = () => {
    if(name === 'All ingredients') {
      dispatch(getAllIngredients(null));
      navigate('all');
      return;
    }

    dispatch(getIngredientsByType({type: name}));
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