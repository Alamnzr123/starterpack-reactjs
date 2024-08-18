import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './reducers/counterSlice';
import datauserReducer from './reducers/datauserReducer';
import postuserReducer from './reducers/postUserReducer';
import deleteuserReducer from './reducers/deleteUserReducer';

export const store = configureStore({
    reducer: {
        counter: counterReducer,
        users: datauserReducer,
        postUsers: postuserReducer,
        deleteUsers: deleteuserReducer
    }
});