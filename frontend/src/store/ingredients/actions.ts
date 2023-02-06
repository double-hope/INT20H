import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';
import { IngredientsByNameDTO, IngredientsByTypeDTO } from 'common/dto';

const getAllIngredients = createAsyncThunk(ActionType.GET_ALL, async (params: any, { extra }: any) => ({
    ingredients: extra.ingredientsService.getAllIngredients(PathType.GET_ALL, {
        ...params,
    })
}));

const getIngredientByName = createAsyncThunk(ActionType.GET_BY_NAME, async (params: IngredientsByNameDTO, { extra }: any) => ({
    ingredient: extra.ingredientsService.getIngredientByName(PathType.GET_BY_NAME, params.name, {
        ...params,
    })
}));

const getIngredientsByType = createAsyncThunk(ActionType.GET_BY_TYPE, async (params: IngredientsByTypeDTO, { extra }: any) => ({
    ingredients: extra.ingredientsService.getIngredientsByType(PathType.GET_BY_TYPE, params.type, {
        ...params,
    })
}));

const getAllIngredientsTypes = createAsyncThunk(ActionType.GET_TYPES, async (params: any, { extra }: any) => ({
    types: extra.ingredientsService.getAllIngredientsTypes(PathType.GET_TYPES, {
        ...params,
    })
}));

export { getAllIngredients, getIngredientByName, getIngredientsByType, getAllIngredientsTypes };