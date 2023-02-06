import { createReducer } from '@reduxjs/toolkit';
import { DataStatusEnum } from 'common/enums';
import { getAllUsers, getUserById, updateUser, deleteUser } from './actions';

const initialState = {
    users: [],
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