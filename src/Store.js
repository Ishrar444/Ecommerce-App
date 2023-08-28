import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './redux/CartSlice'
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist'

const persistConfig = {
  key: 'root',
  storage,
}
const persistedReducer = persistReducer(persistConfig, cartReducer)
export const store = configureStore({
  reducer: {
    counter: persistedReducer,
  },
})