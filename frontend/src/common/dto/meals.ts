export interface MealsByIdDTO {
    mealExternalId: string;
}

export interface MealsByLetterDTO {
    firstLetter: string;
}

interface Recipe {
    recipeComplexity: string;
    steps: [string];
}

export interface Meal {
    idMeal: string;
    ingredients: {};
    recipe: Recipe;
    strArea: string;
    strCategory: string;
    strMeal: string;
    strMealThumb: string;
    strTags: [string];
    strYoutube: string;
}
