import { createReducer } from '@reduxjs/toolkit';
import { DataStatusEnum } from 'common/enums';
import { getAllUsers, getUserById, updateUser, deleteUser } from './actions';

interface User {
    email: string;
    firstName: string;
    lastName: string;
}

const USER_INITIAL_STATE: User = {
    email: null,
    firstName: null,
    lastName: null,
}

const USERS_INITIAL_STATE: typeof USER_INITIAL_STATE[] = [];

const initialState = {
    users: USERS_INITIAL_STATE,
    user: null,
    status: DataStatusEnum.IDLE,
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(getAllUsers.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(getAllUsers.fulfilled, (state, { payload }) => {
        const { users } = payload;
        state.users = users;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(getUserById.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(getUserById.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.user = user;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(updateUser.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(updateUser.fulfilled, (state, { payload }) => {
        const { user } = payload;
        state.user = user;
        state.status = DataStatusEnum.SUCCESS;
    });
    
    builder.addCase(deleteUser.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
    
    builder.addCase(deleteUser.fulfilled, (state, { payload }) => {
        const { users } = payload;
        state.users = users;
        state.status = DataStatusEnum.SUCCESS;
    });
    
});

export { reducer };