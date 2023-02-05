import React from 'react'
import { FlexLayout } from '../flex-layout';
import * as styles from './styles';
import { FlexLayoutEnum } from 'common/enums';
import { recipeBreakfastMock } from 'assets/mocks';
import { RecipeInfoItem } from 'components/recipe-info-item';

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
                {recipeBreakfastMock.map(item => <RecipeInfoItem key={item.id} item={item} />)}
            </div>
        </FlexLayout>
    </div>
    
  )
}

export { RecipesLayout };