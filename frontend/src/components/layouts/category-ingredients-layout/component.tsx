import React, { useEffect, useState } from 'react'
import { CategoryIngredientsLayoutProps } from './types';
import * as styles from './styles';
import { MyIngredientItem } from 'components/my-ingredient-item';
import { useLocation, useNavigate } from 'react-router-dom';
import { ThreeDots  } from 'react-loader-spinner';
import { DataStatusEnum } from 'common/enums';
import { SearchInput } from 'components/primitives/input';
import { useAppDispatch, useAppSelector } from 'hooks/store';
import { getIngredientByName, getIngredientsByPartName, getIngredientsByTypePartName } from 'store/ingredients';

const CategoryIngredientsLayout = ({ name, items }: CategoryIngredientsLayoutProps) => { 
  const [searchName, setSearchName] = useState('');
  const locale = useLocation();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { status, searchedIngredients } = useAppSelector(state => state.ingredients);

  const searchByName = () => {
    dispatch(getIngredientByName({name: searchName}));
  }

  useEffect(() => {
    if(!!searchName) {
      locale.pathname.split('/').pop() === 'all' 
      ? dispatch(getIngredientsByPartName({name: searchName}))
      : dispatch(getIngredientsByTypePartName({type: locale.pathname.split('/').pop(), name: searchName}));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchName]);

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
        {!!searchName.length
           
          ? <>
            {!!searchedIngredients.length
              ? searchedIngredients.map((item, key) => <MyIngredientItem key={item.idIngredient} number={key + 1} id={item.idIngredient} name={item.strIngredient} />)
              : <div style={{fontSize: '30px'}}>Found no ingredients</div>
            }
          </>
          
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