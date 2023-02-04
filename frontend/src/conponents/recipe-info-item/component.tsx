import React from 'react';
import * as styles from './styles';
import { RecipeInfoItemProps } from './types';
import { Icon } from 'conponents/primitives/icon';
import { IconColor, IconName } from 'common/enums';

const RecipeInfoItem = ({ img, name, level, time }: RecipeInfoItemProps) => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.image}>
            <img src={img} alt="" />
            <Icon icon={IconName.ARROW_RIGHT} color={IconColor.WHITE} />
        </div>
        <div css={styles.info}>
            <h3>{name}</h3>
            <div css={styles.additionalInfo}>
                <span>Level - {level}</span>
                <span>Products</span>
                <span>Video tutorial</span>
                <span>Time - {time}</span>
                <span>Recipe</span>
                <span>Feedback</span>
            </div>
        </div>
    </div>
  )
}

export { RecipeInfoItem };