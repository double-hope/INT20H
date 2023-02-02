import type { ReactNode } from 'react';

export type ModalProps = {
  visible: boolean;
  setVisible: (value: boolean) => void;
  children: string | ReactNode;
};
