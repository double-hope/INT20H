import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';
import { UserActionsDTO } from 'common/dto';

const getAllUsers = createAsyncThunk(ActionType.GET_ALL, async (params: any | null, { extra }: any) => (
    extra.usersService.getAllUsers(PathType.GET_ALL, {
        ...params,
    }).then(res => res)
));

const getUserById = createAsyncThunk(ActionType.GET, async (params: UserActionsDTO, { extra }: any) => (
    extra.usersService.getUserById({path: PathType.GET, params, extra: {
        ...params,
    }}).then(res => res)
));

const updateUser = createAsyncThunk(ActionType.UPDATE, async (params: UserActionsDTO, { extra }: any) => (
    extra.usersService.updateUser(PathType.UPDATE, params.userId, {
        ...params,
    }).then(res => res)
));

const deleteUser = createAsyncThunk(ActionType.DELETE, async (params: UserActionsDTO, { extra }: any) => (
    extra.usersService.deleteUser({path: PathType.DELETE, params, extra: {
        ...params,
    }}).then(res => res)
));

export { getAllUsers, getUserById, updateUser, deleteUser };