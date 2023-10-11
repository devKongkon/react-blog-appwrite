import { configureStore } from '@reduxjs/toolkit';
import authSlice from './authSlice';

const store = configureStore({
    //I have to pass here root reducers
    reducer: {
        auth: authSlice,
    }
})

export default store