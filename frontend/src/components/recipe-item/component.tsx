import React from 'react';
import * as styles from './styles';
import { RecipeItemProps } from './types';
import { Icon } from 'components/primitives/icon';
import { IconColor, IconName } from 'common/enums';
import { useNavigate } from 'react-router-dom';

const RecipeItem = ({ img, item }: RecipeItemProps) => {
    
  const navigate = useNavigate();

  const getFullRecipe = () => {
    navigate(`${item.idMeal}`);
  }

  return (
    <div css={styles.wrapper}>
        <img src={img} alt="" />
        <div css={styles.capture}>
          {item.strMeal}
          <div css={styles.more} onClick={getFullRecipe}>
            <p>Learn more</p>
            <Icon icon={IconName.ARROW_RIGHT} color={IconColor.WHITE} />
          </div>
        </div>
    </div>
  )
}

export { RecipeItem };