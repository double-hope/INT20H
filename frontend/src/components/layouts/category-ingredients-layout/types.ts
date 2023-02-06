import { CategoryDTO } from 'common/dto';


export type CategoryIngredientsLayoutProps = {
    name: string;
    items: CategoryDTO[];
    myIngredientsLayout: boolean;
}