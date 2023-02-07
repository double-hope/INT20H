import { ReactNode } from 'react';

export type IngredientsLayoutProps = {
    name: string;
    children: string | ReactNode | ReactNode[];
}