import { createReducer } from '@reduxjs/toolkit';
import { DataStatusEnum } from 'common/enums';
import { getMealByExternalId, getMealByFirstLetter, getAvailableMealsByFirstLetter } from './actions';

const initialState = {
    meals: [],
    meal: null,
    status: DataStatusEnum.IDLE
}

const reducer = createReducer(initialState, (builder) => {

    builder.addCase(getMealByExternalId.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(getMealByExternalId.fulfilled, (state, { payload }) => {
        const { meal } = payload;
        state.meal = meal;
        state.status = DataStatusEnum.SUCCESS;
    }); 

    builder.addCase(getMealByFirstLetter.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });

    builder.addCase(getMealByFirstLetter.fulfilled, (state, { payload }) => {
        const { meals } = payload;
        state.meal = meals;
        state.status = DataStatusEnum.SUCCESS;
    });

    builder.addCase(getAvailableMealsByFirstLetter.pending, (state) => {
        state.status = DataStatusEnum.PENDING;
    });
     
    builder.addCase(getAvailableMealsByFirstLetter.fulfilled, (state, { payload }) => {
        const { meals } = payload;
        state.meal = meals;
        state.status = DataStatusEnum.SUCCESS;
    });

});

export { reducer };