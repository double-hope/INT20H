import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { MealsByIdDTO, MealsByLetterDTO } from 'common/dto';

const getMealByExternalId =  createAsyncThunk(ActionType.GET_BY_ID, async (params: MealsByIdDTO, { extra }: any) => ({
    meal: await extra.authService.signIn( ActionType.GET_BY_ID, params.mealExternalId, {
        ...params
    }),
}));

const getMealByFirstLetter =  createAsyncThunk(ActionType.GET_BY_LETTER, async (params: MealsByLetterDTO, { extra }: any) => ({
    meals: await extra.authService.signIn( ActionType.GET_BY_LETTER, params.firstLetter, {
        ...params
    }),
}));

const getAvailableMealsByFirstLetter =  createAsyncThunk(ActionType.GET_AVAILABLE_BY_LETTER, async (params: MealsByLetterDTO, { extra }: any) => ({
    meals: await extra.authService.signIn( ActionType.GET_AVAILABLE_BY_LETTER, params.firstLetter, {
        ...params
    }),
}));

export { getMealByExternalId, getMealByFirstLetter, getAvailableMealsByFirstLetter };