import { configureStore } from '@reduxjs/toolkit'
import table1Slice from '../features/node/table1Slice'
import table2Slice from '../features/side/table2Slice'
// ...

export const store = configureStore({
  reducer: {
    table1: table1Slice,
    table2: table2Slice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch