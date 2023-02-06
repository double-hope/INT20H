import { DataStatusEnum } from 'common/enums';
import { createReducer } from '@reduxjs/toolkit';
import { signIn, signUp, refreshToken } from './actions';

const initialState = {
    tokens: [],
    token: null,
    status: DataStatusEnum.IDLE,
};

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(signIn.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(signIn.fulfilled, (state, { payload }) => {
        const { tokens } = payload;
        state.tokens = tokens;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(signUp.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(signUp.fulfilled, (state, { payload }) => {
        const { tokens } = payload;
        state.tokens = tokens;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(refreshToken.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(refreshToken.fulfilled, (state, { payload }) => {
        const { token } = payload;
        state.tokens = token;
        state.status = DataStatusEnum.SUCCESS;
    });
});

export { reducer };