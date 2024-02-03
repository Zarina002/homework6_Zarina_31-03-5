import { configureStore } from '@reduxjs/toolkit';
import storageReducer from './storageReducer';

export const store = configureStore({
    reducer: {
        storage: storageReducer,
    },
});