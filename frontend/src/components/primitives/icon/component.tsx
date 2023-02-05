import React from 'react';
import { IconProps } from './types';
import { IconColor, IconNameToClassName } from 'common/enums';
import * as styles from './styles';

const Icon = ({icon, color = IconColor.DARK_BLUE, size = 'md'}: IconProps) => {
  return (
    <i
        className={IconNameToClassName[icon]}
        style={{
        color: `${color}`,
        }}
        data-size={size}
        css={styles.icon}
    />
  )
}

export { Icon };