import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';
import { AddProfileIngredientDTO, AddProfileMealDTO, DeleteProfileIngredientDTO, DeleteProfileMealDTO } from 'common/dto';

const getSavedMeals = createAsyncThunk(ActionType.GET_MEALS, async (params: any | null, { extra }: any) => (
    extra.profileService.getSavedMeals(PathType.GET_MEALS, {
        ...params,
    }).then(res => res)
));

const addMealToProfile = createAsyncThunk(ActionType.ADD_MEAL, async (params: AddProfileMealDTO, { extra }: any) => (
    extra.profileService.addMealToProfile(PathType.ADD_MEAL, {
        ...params,
    }).then(res => res)
));

const deleteMealFromProfile = createAsyncThunk(ActionType.DELETE_MEAL, async (params: DeleteProfileMealDTO, { extra }: any) => (
    extra.profileService.deleteMealFromProfile({path: PathType.DELETE_MEAL, params, extra: {
        ...params,
    }})
));

const getSavedIngredients = createAsyncThunk(ActionType.GET_INGREDIENTS, async (params: any | null, { extra }: any) => (
    extra.profileService.getSavedIngredients(PathType.GET_INGREDIENTS, {
        ...params,
    }).then(res => res)
));

const addIngredientToProfile = createAsyncThunk(ActionType.ADD_INGREDIENT, async (params: AddProfileIngredientDTO, { extra }: any) => (
    extra.profileService.addIngredientToProfile(PathType.ADD_INGREDIENT, {
        ...params,
    }).then(res => res)
));

const deleteIngredientFromProfile = createAsyncThunk(ActionType.DELETE_INGREDIENT, async (params: DeleteProfileIngredientDTO, { extra }: any) => (
    extra.profileService.deleteIngredientFromProfile({path: PathType.DELETE_INGREDIENT, params, extra: {
        ...params,
    }})
));


export { getSavedMeals, addMealToProfile, deleteMealFromProfile, getSavedIngredients, addIngredientToProfile, deleteIngredientFromProfile };