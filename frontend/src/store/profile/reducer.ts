import { createReducer } from "@reduxjs/toolkit";
import { DataStatusEnum } from "common/enums";
import { addIngredientToProfile, addMealToProfile, deleteIngredientFromProfile, deleteMealFromProfile, getSavedIngredients, getSavedMeals } from "./actions";

interface Recipe {
    recipeComplexity: string;
    steps: [string];
}

interface Meal {
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

interface Ingredient {
    idIngredient: string;
    strDescription: string;
    strIngredient: string;
    strType: string;
}

const RECIPE_INITIAL_STATE: Recipe = {
    recipeComplexity: null,
    steps: [null],
}

const MEAL_INITIAL_STATE: Meal = {
    idMeal: null,
    ingredients: {},
    recipe: RECIPE_INITIAL_STATE,
    strArea: null,
    strCategory: null,
    strMeal: null,
    strMealThumb: null,
    strTags: [null],
    strYoutube: null,
}

const MEALS_INITIAL_STATE: typeof MEAL_INITIAL_STATE[] = [];

const INGREDIENT_INITIAL_STATE: Ingredient = {
    idIngredient: null,
    strDescription: null,
    strIngredient: null,
    strType: null,
}

const INGREDIENTS_INITIAL_STATE: typeof INGREDIENT_INITIAL_STATE[] = [];

const initialState = {
    usersMeals: MEALS_INITIAL_STATE,
    usersMeal: null,
    usersIngredients: INGREDIENTS_INITIAL_STATE,
    usersIngredient: null,
    status: DataStatusEnum.IDLE
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(getSavedMeals.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(getSavedMeals.fulfilled, (state, { payload }) => {
        const { usersMeals } = payload;
        state.usersMeals = usersMeals;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(addMealToProfile.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(addMealToProfile.fulfilled, (state, { payload }) => {
        const { usersMeal } = payload;
        state.usersMeal = usersMeal;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(deleteMealFromProfile.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(deleteMealFromProfile.fulfilled, (state, { payload }) => {
        const { usersMeals } = payload;
        state.usersMeals = usersMeals;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(getSavedIngredients.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(getSavedIngredients.fulfilled, (state, { payload }) => {
        const { usersIngredients } = payload;
        state.usersIngredients = usersIngredients;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(addIngredientToProfile.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(addIngredientToProfile.fulfilled, (state, { payload }) => {
        const { usersIngredient } = payload;
        state.usersIngredient = usersIngredient;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(deleteIngredientFromProfile.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(deleteIngredientFromProfile.fulfilled, (state, { payload }) => {
        const { usersIngredients } = payload;
        state.usersIngredients = usersIngredients;
        state.status = DataStatusEnum.SUCCESS;
    });
});

export { reducer };