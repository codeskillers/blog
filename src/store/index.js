import { createStore } from 'redux'
import reducer from './reducer'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}
const myPersistReducer = persistReducer(persistConfig, reducer)
export const store = createStore(myPersistReducer)
export const persistor = persistStore(store)
