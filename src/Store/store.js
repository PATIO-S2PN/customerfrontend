import React from 'react'
import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../Slices/userSlice'

export default configureStore({
    reducer: {
        user: userReducer,
    },
});
