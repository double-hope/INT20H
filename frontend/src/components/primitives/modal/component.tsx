import React, {useCallback} from 'react';
import { createPortal } from 'react-dom';
import * as styles from './styles';
import type { ModalProps } from './types';
import { useOutsideClick } from 'hooks/use-outside-click';

const Modal = ({ visible, setVisible, children }: ModalProps) => {

  const handleClickOutside = useCallback(() => {
      setVisible(false);
    }, [setVisible]);
  

  const bodyRef = useOutsideClick(handleClickOutside);

  const renderPortalBody = () => (
    <div css={styles.modalWrapper}>
      <div ref={bodyRef} css={styles.modalContent}>{children}</div>
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