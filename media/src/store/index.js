import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { usersReducer } from './slices/usersSlice';
import { albumsApi } from './apis/albumsApi';

export const store = configureStore({
  reducer: {
    users: usersReducer,
    [albumsApi.reducerPath]: albumsApi.reducer // [albumsApi.reducerPath key of albums API = reducerPath
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(albumsApi.middleware);
  }
});

setupListeners(store.dispatch);

export * from './thunks/fetchUsers';
export * from './thunks/createUser';
export * from './thunks/removeUser';
export { useFetchAlbumsQuery } from './apis/albumsApi';