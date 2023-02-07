import { Ingredient } from 'common/dto';


export type CategoryIngredientsLayoutProps = {
    name: string;
    items: Ingredient[];
    myIngredientsLayout: boolean;
}