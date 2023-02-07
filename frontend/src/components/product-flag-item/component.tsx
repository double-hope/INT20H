import React, { useEffect, useState } from 'react';
import { ProductFlagItemProps } from './types';
import * as styles from './styles';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { addIngredientToProfile, deleteIngredientFromProfile } from 'store/profile';

const ProductFlagItem = ({ id, amount, name }: ProductFlagItemProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useAppDispatch();
  const { status, usersIngredients } = useAppSelector(state => state.profile);

  const toggleSaved = () => {
    setIsAdded(!isAdded);
  }

  useEffect(() => {
    if(isAdded) dispatch(addIngredientToProfile({externalId: id}));
    else dispatch(deleteIngredientFromProfile({externalIngredientId: id}));
  }, [isAdded]);

  return (
    <div css={styles.wrapper}>
        <div css={styles.amount}>{amount}</div>
        <div css={styles.name}>{name}</div>
        <div css={styles.flag} added-item={`${isAdded}`} onClick={toggleSaved}> {isAdded ? '-' : '+'} </div>
    </div>
  )
}

export { ProductFlagItem };