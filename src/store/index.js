import { persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist'
import { configureStore } from '@reduxjs/toolkit';
import { apiSlice } from '../services';
// import movieReducer from '../common/slices/movieSlice';


export const store = configureStore({
  reducer: {
    // Include the API slice reducer
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});

// const store = configureStore({
//   reducer: {
//     movie: {[movieApi.reducerPath]: movieApi.reducer},
//   },
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       }
//     }),
// });

// let persistor = persistStore(store)
// export { store, persistor }