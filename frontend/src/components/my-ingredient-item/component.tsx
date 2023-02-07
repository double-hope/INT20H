/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { ProductFlagItemProps } from './types';
import * as styles from './styles';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { addIngredientToProfile, deleteIngredientFromProfile, getSavedIngredients } from 'store/profile';
import { DataStatusEnum } from 'common/enums';

const MyIngredientItem = ({ number, id, name }: ProductFlagItemProps) => {
  const [isAdded, setIsAdded] = useState(false);

  const dispatch = useAppDispatch();
  const { status, usersIngredients } = useAppSelector(state => state.profile);

  useEffect(() => {
    if(!usersIngredients) dispatch(getSavedIngredients(null));
  }, [])

  const toggleSaved = () => {
    setIsAdded(!isAdded);
  }

  useEffect(() => {
    if(isAdded) dispatch(addIngredientToProfile({externalId: id}));
    else dispatch(deleteIngredientFromProfile({externalIngredientId: id}));
  }, [isAdded]);

  useEffect(() => {
    if(status === DataStatusEnum.SUCCESS) {
      setIsAdded(!!usersIngredients.find(item => item.idIngredient === id));
    }
  }, [usersIngredients])

  return (
    <div css={styles.wrapper}>
        <div css={styles.number}>{number}</div>
        <div css={styles.name}>{name}</div>
        <div css={styles.flag} added-item={`${isAdded}`} onClick={toggleSaved}> {isAdded ? '-' : '+'} </div>
    </div>
  )
}

export { MyIngredientItem };