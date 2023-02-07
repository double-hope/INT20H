import { createReducer } from '@reduxjs/toolkit';
import { DataStatusEnum } from 'common/enums';
import { getAllIngredients, getIngredientByName, getIngredientsByType, getAllIngredientsTypes } from './actions';

interface Ingredient {
    idIngredient: string;
    strDescription: string;
    strIngredient: string;
    strType: string;
}

const INGREDIENT_INITIAL_STATE: Ingredient = {
    idIngredient: null,
    strDescription: null,
    strIngredient: null,
    strType: null,
}

const INGREDIENTS_INITIAL_STATE: typeof INGREDIENT_INITIAL_STATE[] = [];

const initialState = {
    ingredients: INGREDIENTS_INITIAL_STATE,
    ingredient: INGREDIENT_INITIAL_STATE,
    types: [],
    status: DataStatusEnum.IDLE,
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(getAllIngredients.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(getAllIngredients.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(getIngredientByName.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(getIngredientByName.fulfilled, (state, { payload }) => {
        const { ingredient } = payload;
        state.ingredient = ingredient;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(getIngredientsByType.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(getIngredientsByType.fulfilled, (state, { payload }) => {
        state.ingredients = payload;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(getAllIngredientsTypes.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(getAllIngredientsTypes.fulfilled, (state, { payload }) => {
        state.types = payload;
        state.status = DataStatusEnum.SUCCESS;
    });
});

export { reducer };