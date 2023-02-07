import React, { useState } from 'react';
import * as styles from './styles';
import { GrosseriesLayoutProps } from './types';
import { SearchInput } from 'components/primitives/input';
import { Button } from 'components/primitives/button/component';
import { ButtonEnum } from 'common/enums';

const GrosseriesLayout = ({ children }: GrosseriesLayoutProps) => {
  const [value, setValue] = useState('');

  const callback = () => {

  }

  return (
    <div css={styles.wrapper}>
      <div css={styles.heading}>
        <h1>Grosseries</h1>
      </div>
      <div css={styles.layout}>
        <div css={styles.searchMenu}>
          <SearchInput placeholder='Search' value={value} setValue={setValue} callback={callback} />
          <Button variant={ButtonEnum.ACCENT} onClick={callback}> Find </Button> 
        </div>
        <div css={styles.map}>
          Map
        </div>
      </div>
      {children}
    </div>
  )
}

export { GrosseriesLayout };