import { createReducer } from "@reduxjs/toolkit";
import { DataStatusEnum } from "common/enums";
import { addIngredientToProfile, addMealToProfile, deleteIngredientFromProfile, deleteMealFromProfile, getSavedIngredients, getSavedMeals } from "./actions";

const initialState = {
    usersMeals: [],
    usersMeal: null,
    usersIngredients: [],
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