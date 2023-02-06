import { createReducer } from '@reduxjs/toolkit';
import { DataStatusEnum } from 'common/enums';
import { getAllIngredients, getIngredientByName, getIngredientsByType, getAllIngredientsTypes } from './actions';

const initialState = {
    ingredients: [],
    ingredient: null,
    types: [],
    status: DataStatusEnum.IDLE,
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(getAllIngredients.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(getAllIngredients.fulfilled, (state, { payload }) => {
        const { ingredients } = payload;
        state.ingredients = ingredients;
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
        const { ingredients } = payload;
        state.ingredients = ingredients;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(getAllIngredientsTypes.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(getAllIngredientsTypes.fulfilled, (state, { payload }) => {
        const { types } = payload;
        state.types = types;
        state.status = DataStatusEnum.SUCCESS;
    });
});

export { reducer };