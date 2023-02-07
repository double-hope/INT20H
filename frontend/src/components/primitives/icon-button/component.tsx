import React from 'react';
import { IconButtonProps } from './types';
import { IconColor, IconNameToClassName } from 'common/enums';
import * as styles from './styles';

const IconButton = ({icon, color = IconColor.DARK_BLUE, callback, size = 'md'}: IconButtonProps) => {
  return (
    <i
        onClick={callback}
        className={IconNameToClassName[icon]}
        style={{
        color: `${color}`,
        }}
        data-size={size}
        css={styles.icon}
    />
  )
}

export { IconButton };