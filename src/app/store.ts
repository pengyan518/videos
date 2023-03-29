import {configureStore, ThunkAction, Action} from '@reduxjs/toolkit'
// eslint-disable-next-line import/no-cycle
import counterReducer from '../features/counter/counterSlice'
import introReducer from '../features/intro/introSlice'
import categoryReducer from '../features/category/categorySlice'
import shortsReducer from '../components/ShortVideoPage/shortsSlice'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    intro: introReducer,
    category: categoryReducer,
    shorts: shortsReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>
