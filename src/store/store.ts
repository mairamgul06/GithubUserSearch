import { configureStore } from "@reduxjs/toolkit";
import { gitApi } from "./git/git.api";
import { setupListeners } from "@reduxjs/toolkit/query";
import { gitReducer } from "./git/gitcslice";

export const store = configureStore({
    reducer: {
       [gitApi.reducerPath]: gitApi.reducer,
       github: gitReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(gitApi.middleware)
})
setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>