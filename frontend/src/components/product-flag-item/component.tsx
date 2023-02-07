/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ProductFlagItemProps } from './types';
import * as styles from './styles';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { addIngredientToProfile, deleteIngredientFromProfile, getSavedIngredients } from 'store/profile';

const ProductFlagItem = ({ id, amount, name }: ProductFlagItemProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useAppDispatch();
  const { usersIngredients } = useAppSelector(state => state.profile);

  useEffect(() => {
    if(!usersIngredients) dispatch(getSavedIngredients(null));
  }, [])

  const toggleSaved = () => {
    setIsAdded(!isAdded);
  }

  useEffect(() => {
    if(isAdded) dispatch(addIngredientToProfile({externalId: id[0]}));
    else dispatch(deleteIngredientFromProfile({externalIngredientId: id[0]}));
  }, [isAdded]);

  useEffect(() => {
    
    if(!!usersIngredients) {
      setIsAdded(!!usersIngredients.find(item => item.idIngredient === id[0]));
    }
  }, [usersIngredients]);

  return (
    <div css={styles.wrapper}>
        <div css={styles.amount}>{amount}</div>
        <div css={styles.name}>{name}</div>
        <div css={styles.flag} added-item={`${isAdded}`} onClick={toggleSaved}> {isAdded ? '-' : '+'} </div>
    </div>
  )
}

export { ProductFlagItem };