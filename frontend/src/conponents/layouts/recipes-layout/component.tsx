import React from 'react'
import { FlexLayout } from '../flex-layout';
import * as styles from './styles';
import { FlexLayoutEnum } from 'common/enums';
import { recipeBreakfastMock } from 'assets/mocks';
import { RecipeInfoItem } from 'conponents/recipe-info-item';

const RecipesLayout = () => {
  return (
    <div css={styles.layout}>
        <FlexLayout type={FlexLayoutEnum.DEFAULT}>
            <div css={styles.heading}>
                Recipes
            </div>
            <div css={styles.category}>
                Breakfast
            </div>
            <div css={styles.container}>
                {recipeBreakfastMock.map(item => <RecipeInfoItem img={item.img} name={item.name} level={item.level} time={item.time} />)}
            </div>
        </FlexLayout>
    </div>
    
  )
}

export { RecipesLayout };