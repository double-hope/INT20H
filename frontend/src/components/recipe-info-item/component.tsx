import React from 'react';
import * as styles from './styles';
import { RecipeInfoItemProps } from './types';
import { Icon } from 'components/primitives/icon';
import { IconColor, IconName } from 'common/enums';
import { Link } from 'react-router-dom';

const RecipeInfoItem = ({ item }: RecipeInfoItemProps) => {
  return (
    <div css={styles.wrapper}>
        <div css={styles.image}>
            <img src={item.img} alt="" />
            <Icon icon={IconName.ARROW_RIGHT} color={IconColor.WHITE} />
        </div>
        <div css={styles.info}>
            <Link to={`${item.id}`} style={{textDecoration: 'none'}}><h3>{item.name}</h3></Link>
            
            <div css={styles.additionalInfo}>
                <span>Level - {item.level}</span>
                <span>Products</span>
                <span>Video tutorial</span>
                <span>Time - {item.time}</span>
                <span>Recipe</span>
                <span>Feedback</span>
            </div>
        </div>
    </div>
  )
}

export { RecipeInfoItem };