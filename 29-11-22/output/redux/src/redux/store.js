import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slices/Count'
import User from './slices/User'
import Login from './slices/Login'
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    user:User,
    login:Login,

  },
})
