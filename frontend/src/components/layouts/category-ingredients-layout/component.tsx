import React, { useState } from 'react'
import { CategoryIngredientsLayoutProps } from './types';
import * as styles from './styles';
import { MyIngredientItem } from 'components/my-ingredient-item';
import { useNavigate } from 'react-router-dom';
import { ThreeDots  } from 'react-loader-spinner';
import { DataStatusEnum } from 'common/enums';
import { SearchInput } from 'components/primitives/input';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { getIngredientByName } from 'store/ingredients';

const CategoryIngredientsLayout = ({ name, items }: CategoryIngredientsLayoutProps) => { 
  const [searchName, setSearchName] = useState('');
  
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, ingredient } = useAppSelector(state => state.ingredients);

  const searchByName = () => {
    dispatch(getIngredientByName({name: searchName}));
  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.heading}>
        <h1>{name}</h1>
        <div css={styles.button} onClick={() => navigate('/my-ingredients')}>
          My ingredients
        </div>
      </div>
      <div css={styles.search}>
        <SearchInput placeholder='Search' value={searchName} setValue={setSearchName} callback={searchByName} />
      </div>
      <div css={styles.flex}>
        {
          !!ingredient && !!searchName.length
          ? <MyIngredientItem key={ingredient.idIngredient} number={1} id={ingredient.idIngredient} name={ingredient.strIngredient} />
          
          
          : <>{status === DataStatusEnum.SUCCESS
            ? items.map((item, key) => <MyIngredientItem key={item.idIngredient} number={key + 1} id={item.idIngredient} name={item.strIngredient} />)
            : <div> 
                <ThreeDots 
                  height={80}
                  width={80}
                  radius={9}
                  color="#000000"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />  
              </div>
        }</>}
      </div>
    </div>
  )
}

export { CategoryIngredientsLayout };