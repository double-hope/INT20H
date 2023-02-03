import React from 'react';
import * as styles from './styles';
import { RecipeItemProps } from './types';
import { Icon } from 'conponents/primitives/icon';
import { IconColor, IconName } from 'common/enums';

const RecipeItem = ({ img, item }: RecipeItemProps) => {
    
  return (
    <div css={styles.wrapper}>
        <img src={img} alt="" />
        <div css={styles.capture}>
          {item.name}
          <div css={styles.more}>
            <p>Learn more</p>
            <Icon icon={IconName.ARROW_RIGHT} color={IconColor.WHITE} />
          </div>
        </div>
    </div>
  )
}

export { RecipeItem };