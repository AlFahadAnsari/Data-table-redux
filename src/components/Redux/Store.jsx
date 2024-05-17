import { configureStore } from '@reduxjs/toolkit'
import DataReducer from './Reducer'


export const store = configureStore({
    reducer: {
        data: DataReducer
    },
  })
