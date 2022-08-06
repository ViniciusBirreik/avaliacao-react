import { configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import rootReducer from './modules/rootReducer'

const persistConfig = {
    key: 'avalicao_ract',
    storage, 
    whitelist: ['Registration']
}

const persistedReducers = persistReducer(persistConfig, rootReducer)
export const store = configureStore({ reducer: persistedReducers })
export const persistor = persistStore(store)