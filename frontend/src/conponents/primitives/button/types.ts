import { ButtonEnum } from 'common/enums';
import type { ReactNode } from 'react';

export type ButtonProps = {
    variant: ButtonEnum;
    onClick: () => void;
    children: string | ReactNode;
}