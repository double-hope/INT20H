import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';
import { MealsByIdDTO, MealsByLetterDTO, MealsByNameDTO } from 'common/dto';

const getMealByExternalId =  createAsyncThunk(ActionType.GET_BY_ID, async (params: MealsByIdDTO, { extra }: any) => ({
    meal: await extra.mealsService.getMealByExternalId( {path: PathType.GET_BY_ID, params, extra: {
        ...params
    }}),
}));

const getMealByFirstLetter =  createAsyncThunk(ActionType.GET_BY_LETTER, async (params: MealsByLetterDTO, { extra }: any) => ({
    meals: await extra.mealsService.getMealByFirstLetter( {path: PathType.GET_BY_LETTER, params, extra: {
        ...params
    }})
}));

const getMealByName =  createAsyncThunk(ActionType.GET_BY_NAME, async (params: MealsByNameDTO, { extra }: any) => ({
    meals: await extra.mealsService.getMealByName( {path: PathType.GET_BY_NAME, params, extra: {
        ...params
    }})
}));

const getAvailableMealsByFirstLetter =  createAsyncThunk(ActionType.GET_AVAILABLE_BY_LETTER, async (params: MealsByLetterDTO, { extra }: any) => ({
    meals: await extra.mealsService.getAvailableMealsByFirstLetter( {path: PathType.GET_BY_LETTER, params, extra: {
        ...params
    }}),
}));

export { getMealByExternalId, getMealByFirstLetter, getMealByName, getAvailableMealsByFirstLetter };