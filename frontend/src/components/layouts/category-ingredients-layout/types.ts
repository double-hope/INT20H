export interface CategoryDTO {
    img: string;
    name: string;
}

export type CategoryIngredientsLayoutProps = {
    name: string;
    items: CategoryDTO[];
}