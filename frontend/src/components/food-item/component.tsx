/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { FoodItemProps } from './types';
import * as styles from './styles';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { addIngredientToProfile, deleteIngredientFromProfile, getSavedIngredients } from 'store/profile';
import { ingredientImg } from 'assets/images/ingredients';
import { DataStatusEnum } from 'common/enums';

const FoodItem = ({ id, name }: FoodItemProps) => {
  const [isAdded, setIsAdded] = useState(false);
  
  const dispatch = useAppDispatch();
  const { status, usersIngredients } = useAppSelector(state => state.profile);

  useEffect(() => {
    if(!usersIngredients) dispatch(getSavedIngredients(null));
  }, [])

  useEffect(() => {
    if(isAdded) dispatch(addIngredientToProfile({externalId: id}));
    else dispatch(deleteIngredientFromProfile({externalIngredientId: id}));
  }, [isAdded]);

  useEffect(() => {
    if(status === DataStatusEnum.SUCCESS) {
      setIsAdded(!!usersIngredients.find(item => item.idIngredient === id));
    }
  }, [usersIngredients]);

  return (
    <div css={styles.wrapper}>
        <div css={styles.image}>
            <img src={ingredientImg} alt="" />
            {!!usersIngredients && <div added-item={`${isAdded}`} onClick={() => setIsAdded(!isAdded)}> {isAdded ? '-' : '+'} </div>}
        </div>
        <div css={styles.name}>{name}</div>
    </div>
  )
}

export { FoodItem };