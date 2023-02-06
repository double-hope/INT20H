import { createReducer } from '@reduxjs/toolkit';
import { DataStatusEnum } from 'common/enums';
import { getMealByExternalId, getMealByFirstLetter, getAvailableMealsByFirstLetter } from './actions';

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

const initialState = {
    meals: MEALS_INITIAL_STATE,
    meal: null,
    status: DataStatusEnum.IDLE
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(getMealByExternalId.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(getMealByExternalId.fulfilled, (state, { payload }) => {
        const { meal } = payload;
        state.meal = meal;
        state.status = DataStatusEnum.SUCCESS;
    }); 

    builder.addCase(getMealByFirstLetter.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(getMealByFirstLetter.fulfilled, (state, { payload }) => {
        const { meals } = payload;
        state.meal = meals;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(getAvailableMealsByFirstLetter.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
     
    builder.addCase(getAvailableMealsByFirstLetter.fulfilled, (state, { payload }) => {
        const { meals } = payload;
        state.meal = meals;
        state.status = DataStatusEnum.SUCCESS;
    });

});

export { reducer };