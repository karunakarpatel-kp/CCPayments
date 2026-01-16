import { configureStore } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { getUserEnteredLoginDetails } from "./Slices/loginSlice";
import loginSlice from "./Slices/loginSlice";

const centralStore = configureStore({
  reducer: {
    loginSlice: loginSlice,
  },
});

export default centralStore;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof centralStore.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof centralStore.dispatch;

export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();
