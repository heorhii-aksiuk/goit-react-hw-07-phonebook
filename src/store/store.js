import { configureStore } from '@reduxjs/toolkit';
// import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { contactsApi } from './contactsApi';
import { contactsReducer } from './contacts/slice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    [contactsApi.reducerPath]: contactsApi.reducer,
  },
  middleware: getDefaultMiddleware => [
    ...getDefaultMiddleware(),
    contactsApi.middleware,
  ],
  devTools: process.env.NODE_ENV === 'development',
});

// setupListeners(store.dispatch);

// hw6

// import { configureStore, combineReducers } from '@reduxjs/toolkit';

// import { contactsReducer } from './contacts/slice';

// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// export const store = configureStore({
//   reducer: rootReducer,
//   middleware: getDefaultMiddleware => getDefaultMiddleware(),
//   devTools: process.env.NODE_ENV === 'development',
// });
//test
