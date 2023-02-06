export interface IngredientsByTypeDTO {
    type: string;
}

export interface IngredientsByNameDTO {
    name: string;
}

export interface Ingredient {
    idIngredient: string;
    strDescription: string;
    strIngredient: string;
    strType: string;
}
