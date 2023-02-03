import React from 'react';
import * as styles from './styles';
import { Icon } from '../icon';
import { IconColor, IconName } from 'common/enums';

const SocialIcons = () => {
  return (
    <div css={styles.icons}>
        <a href='https://uk-ua.facebook.com/'><Icon icon={IconName.FACEBOOK} color={IconColor.DARK_BLUE} size='sm' /></a>
        <a href='https://www.instagram.com/'><Icon icon={IconName.INSTAGRAM} color={IconColor.DARK_BLUE} size='sm'/></a>
        <a href='https://web.telegram.org/'><Icon icon={IconName.TELEGRAM} color={IconColor.DARK_BLUE} size='sm'/></a>
        <a href='https://www.youtube.com/'><Icon icon={IconName.YOUTUBE} color={IconColor.DARK_BLUE} size='sm'/></a>
        <a href='https://www.linkedin.com/'><Icon icon={IconName.LINKEDIN} color={IconColor.DARK_BLUE} size='sm'/></a>
        <a href='https://twitter.com/'><Icon icon={IconName.TWITTER} color={IconColor.DARK_BLUE} size='sm'/></a>
    </div>
  )
}
export { SocialIcons };