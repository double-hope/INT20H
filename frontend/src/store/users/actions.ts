import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType } from './common';
import { UserActionsDTO } from 'common/dto';

const getAllUsers = createAsyncThunk(ActionType.GET_ALL, async (params: any, { extra }: any) => ({
    users: extra.usersService.getAllUsers(ActionType.GET_ALL, {
        ...params,
    })
}));

const getUserById = createAsyncThunk(ActionType.GET, async (params: UserActionsDTO, { extra }: any) => ({
    user: extra.usersService.getUserById(ActionType.GET, params.userId, {
        ...params,
    })
}));

const updateUser = createAsyncThunk(ActionType.UPDATE, async (params: UserActionsDTO, { extra }: any) => ({
    user: extra.usersService.updateUser(ActionType.UPDATE, params.userId, {
        ...params,
    })
}));

const deleteUser = createAsyncThunk(ActionType.DELETE, async (params: UserActionsDTO, { extra }: any) => ({
    users: extra.usersService.deleteUser(ActionType.DELETE, params.userId, {
        ...params,
    })
}));

export { getAllUsers, getUserById, updateUser, deleteUser };