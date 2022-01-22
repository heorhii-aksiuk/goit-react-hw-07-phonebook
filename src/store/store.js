import { configureStore, combineReducers } from '@reduxjs/toolkit';
import { contactsReducer } from './contacts/slice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware(),
  devTools: process.env.NODE_ENV === 'development',
});
