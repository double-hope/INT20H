import React, { useEffect, useState } from 'react';
import * as styles from './styles';
import { alphabet } from 'assets/mocks/alphabet';
import { RecipeItem } from 'components/recipe-item';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { getAvailableMealsByFirstLetter, getMealByFirstLetter, getMealByName } from 'store/meals';
import { SearchInput } from 'components/primitives';

const MealLayout = () => {
  const [choosen, setChoosen] = useState('A');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const dispatch = useAppDispatch();
  const { meals } = useAppSelector(state => state.meals);

  useEffect(() => {
    dispatch(getMealByFirstLetter({firstLetter: choosen}));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [choosen]);

  const searchByName = () => {
    dispatch(getMealByName({name}));
  }

  const searchByMyIngredients = () => {
    dispatch(getAvailableMealsByFirstLetter({firstLetter: choosen}));
    setMessage(`There is no meals on letter ${choosen} you can cook base on you ingredients`);
  }

  useEffect(() => {
    setMessage(`No recipes on letter ${choosen}`);
  }, [choosen]);

  return (
    <div css={styles.wrapper}>
      <h1>Meals</h1>

      <div css={styles.alphabet}>
        {alphabet.map(letter => <div key={letter} choosen-letter={`${choosen === letter}`} onClick={() => setChoosen(letter)}>{letter}</div>)}
      </div>
      <div css={styles.searchLayout}>
        <SearchInput placeholder='Search meal' value={name} setValue={setName} callback={searchByName} />
        <div onClick={searchByMyIngredients}>Find by my ingredients</div>
      </div>
      <div css={styles.layout}>
        { !!meals.length
          ? meals.map(meal => <RecipeItem key={meal.strMeal} img={meal.strMealThumb} item={meal} />)
          : <div style={{width: '100%', textAlign: 'center', gridColumn: 'span 2'}}>{message}</div>
        }
      </div>
    </div>
  )
}

export { MealLayout };