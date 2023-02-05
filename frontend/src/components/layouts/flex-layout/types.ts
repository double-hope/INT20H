import { FlexLayoutEnum } from 'common/enums';
import type { ReactNode } from 'react';

export type FlexLayoutProps = {
    type: FlexLayoutEnum;
    children: string | ReactNode;
}