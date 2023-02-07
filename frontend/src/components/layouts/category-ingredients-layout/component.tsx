import React from 'react'
import { CategoryIngredientsLayoutProps } from './types';
import * as styles from './styles';
import { MyIngredientItem } from 'components/my-ingredient-item';
import { useNavigate } from 'react-router-dom';
import { ThreeDots  } from 'react-loader-spinner';

const CategoryIngredientsLayout = ({ name, items, myIngredientsLayout }: CategoryIngredientsLayoutProps) => { 
  
  const navigate = useNavigate();

  return (
    <div css={styles.wrapper}>
      <div css={styles.heading}>
        <h1>{name}</h1>
        <div css={styles.button} onClick={() => navigate('/my-ingredients')}>
          My ingredients
        </div>
      </div>
      
      <div css={styles.flex}>
        {!!items.length
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
        }
      </div>
    </div>
  )
}

export { CategoryIngredientsLayout };