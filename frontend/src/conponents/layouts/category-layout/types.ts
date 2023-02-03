export interface CategoryDTO {
    img: string;
    name: string;
}

export type CategoryLayoutProps = {
    name: string;
    items: CategoryDTO[];
}