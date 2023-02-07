import React, { useEffect, useState } from 'react'
import { FoodItemProps } from './types';
import * as styles from './styles';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { addIngredientToProfile, deleteIngredientFromProfile } from 'store/profile';
import { ingredientImg } from 'assets/images/ingredients';

const FoodItem = ({ id, name, added, myIngredients }: FoodItemProps) => {
  const [isAdded, setIsAdded] = useState(added);
  
  const dispatch = useAppDispatch();
  const { usersIngredient } = useAppSelector(state => state.profile);

  useEffect(() => {
    if(isAdded) dispatch(addIngredientToProfile({externalId: id}));
    else dispatch(deleteIngredientFromProfile({externalIngredientId: id}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isAdded]);

  useEffect(() => {
    console.log(usersIngredient)
  }, [usersIngredient]);

  return (
    <div css={styles.wrapper}>
        <div css={styles.image}>
            <img src={ingredientImg} alt="" />
            {!myIngredients && <div added-item={`${isAdded}`} onClick={() => setIsAdded(!isAdded)}> {isAdded ? '-' : '+'} </div>}
        </div>
        <div css={styles.name}>{name}</div>
    </div>
  )
}

export { FoodItem };