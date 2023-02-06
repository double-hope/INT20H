import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';
import { UserActionsDTO } from 'common/dto';

const getAllUsers = createAsyncThunk(ActionType.GET_ALL, async (params: any, { extra }: any) => ({
    users: extra.usersService.getAllUsers(PathType.GET_ALL, {
        ...params,
    })
}));

const getUserById = createAsyncThunk(ActionType.GET, async (params: UserActionsDTO, { extra }: any) => ({
    user: extra.usersService.getUserById(PathType.GET, params.userId, {
        ...params,
    })
}));

const updateUser = createAsyncThunk(ActionType.UPDATE, async (params: UserActionsDTO, { extra }: any) => ({
    user: extra.usersService.updateUser(PathType.UPDATE, params.userId, {
        ...params,
    })
}));

const deleteUser = createAsyncThunk(ActionType.DELETE, async (params: UserActionsDTO, { extra }: any) => ({
    users: extra.usersService.deleteUser(PathType.DELETE, params.userId, {
        ...params,
    })
}));

export { getAllUsers, getUserById, updateUser, deleteUser };