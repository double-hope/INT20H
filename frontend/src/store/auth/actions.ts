import { createAsyncThunk } from '@reduxjs/toolkit';
import { ActionType, PathType } from './common';
import { RefreshTokenDTO, UserSignInDTO, UserSignUpDTO } from 'common/dto';

const signIn = createAsyncThunk(ActionType.SIGN_IN, async (params: UserSignInDTO, { extra }: any) => ({
    tokens: await extra.authService.signIn( PathType.SIGN_IN, {
        ...params
    }),
}));

const signUp = createAsyncThunk(ActionType.SIGN_UP, async (params: UserSignUpDTO, { extra }: any) => ({
    tokens: await extra.authService.signUp( PathType.SIGN_UP, {
        ...params
    }),
}));

const refreshToken = createAsyncThunk(ActionType.REFRESH_TOKEN, async (params: RefreshTokenDTO, { extra }: any) => ({
    token: await extra.authService.refreshToken( PathType.REFRESH_TOKEN, {
        ...params
    }),
}));

export { signIn, signUp, refreshToken };