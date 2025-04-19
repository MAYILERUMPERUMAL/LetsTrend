import {applyMiddleware, combineReducers, compose, createStore} from 'redux'
import { Authreducer } from '../Auth';
import {persistReducer, persistStore} from 'redux-persist'
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducer = combineReducers({
    Authreducer
   
  });
  const persistConfig = {
    key: 'Lets-Trend',
    storage: AsyncStorage,
  };
  const rootReducer = (state: any, action: any) => {
    return reducer(state, action);
  };
  
  const persistedReducer = persistReducer(persistConfig,rootReducer);
const sagaMiddleware = createSagaMiddleware();
  
  
  const store = createStore(
    persistedReducer,
    {},
  compose(applyMiddleware(sagaMiddleware)),

  );
  
  const persistor = persistStore(store);
  
  export type RootState = ReturnType<typeof store.getState>;
  export type AppDispatch = typeof store.dispatch;
  
  export {store, persistor};