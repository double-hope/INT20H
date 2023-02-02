import React from 'react';
import { createPortal } from 'react-dom';
import * as styles from './styles';
import type { ModalProps } from './types';

const Modal = ({ visible, children }: ModalProps) => {
  const renderPortalBody = () => (
    <div css={styles.modalWrapper}>
      <div css={styles.modalContent}>{children}</div>
    </div>
  );

  const renderPortal = () =>
    createPortal(renderPortalBody(), document.getElementById('modal'));

  return (
  <React.Fragment>
    {visible && renderPortal()}
  </React.Fragment>
  )
}

export { Modal }; 