import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { AddProfileIngredientDTO, AddProfileMealDTO, DeleteProfileIngredientDTO, DeleteProfileMealDTO } from 'common/dto';

const getSavedMeals = createAsyncThunk(ActionType.GET_INGREDIENTS, async (params: any, { extra }: any) => ({
    usersMeals: extra.profileService.getSavedMeals(ActionType.GET_INGREDIENTS, {
        ...params,
    })
}));

const addMealToProfile = createAsyncThunk(ActionType.ADD_MEAL, async (params: AddProfileMealDTO, { extra }: any) => ({
    usersMeal: extra.profileService.addMealToProfile(ActionType.ADD_MEAL, {
        ...params,
    })
}));

const deleteMealFromProfile = createAsyncThunk(ActionType.DELETE_MEAL, async (params: DeleteProfileMealDTO, { extra }: any) => ({
    usersMeals: extra.profileService.deleteMealFromProfile(ActionType.DELETE_MEAL, params.externalMealId, {
        ...params,
    })
}));

const getSavedIngredients = createAsyncThunk(ActionType.GET_INGREDIENTS, async (params: any, { extra }: any) => ({
    usersIngredients: extra.profileService.getSavedIngredients(ActionType.GET_INGREDIENTS, {
        ...params,
    })
}));

const addIngredientToProfile = createAsyncThunk(ActionType.ADD_INGREDIENT, async (params: AddProfileIngredientDTO, { extra }: any) => ({
    usersIngredient: extra.profileService.addIngredientToProfile(ActionType.ADD_INGREDIENT, {
        ...params,
    })
}));

const deleteIngredientFromProfile = createAsyncThunk(ActionType.DELETE_INGREDIENT, async (params: DeleteProfileIngredientDTO, { extra }: any) => ({
    usersIngredients: extra.profileService.deleteIngredientFromProfile(ActionType.DELETE_INGREDIENT, params.externalIngredientId, {
        ...params,
    })
}));


export { getSavedMeals, addMealToProfile, deleteMealFromProfile, getSavedIngredients, addIngredientToProfile, deleteIngredientFromProfile };