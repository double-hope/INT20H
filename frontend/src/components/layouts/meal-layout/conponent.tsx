import React, { useEffect, useState } from 'react';
import * as styles from './styles';
import { alphabet } from 'assets/mocks/alphabet';
import { RecipeItem } from 'components/recipe-item';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { getMealByFirstLetter } from 'store/meals';

const MealLayout = () => {
  const [choosen, setChoosen] = useState('A');
  const dispatch = useAppDispatch();
  const { meals } = useAppSelector(state => state.meals);

  useEffect(() => {
    dispatch(getMealByFirstLetter({firstLetter: choosen}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choosen]);

  return (
    <div css={styles.wrapper}>
      <h1>Meals</h1>

      <div css={styles.alphabet}>
        {alphabet.map(letter => <div key={letter} choosen-letter={`${choosen === letter}`} onClick={() => setChoosen(letter)}>{letter}</div>)}
      </div>

      <div css={styles.layout}>
        {
          meals.map(meal => <RecipeItem key={meal.strMeal} img={meal.strMealThumb} item={meal} />)
        }
      </div>
    </div>
  )
}

export { MealLayout };