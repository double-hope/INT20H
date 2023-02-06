import React from 'react'
import { PageLinkProps } from './types';
import { Link } from 'react-router-dom';
import * as styles from './styles';
import { Icon } from '../icon';
import { IconColor, IconName } from 'common/enums';

const PageLink = ({ pageUrl, categoryName }: PageLinkProps) => {
  return (
      <Link css={styles.wrapper} to={`${pageUrl}`}>
        {categoryName}
        <Icon icon={IconName.ARROW_RIGHT} color={IconColor.WHITE}/>
      </Link>
  )
}

export { PageLink };