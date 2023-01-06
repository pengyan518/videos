import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit'
import axios from 'axios'

import config from '../../config'

export interface CategoryState {
  currentCategory: any[] | null
  status: 'idle' | 'loading' | 'failed' | 'initial'
}

const initialState: CategoryState = {
  currentCategory: null,
  status: 'initial',
}

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
// export const fetchInitial = createAsyncThunk('intro/fetchInitial', async () => {
//   const {data} = await axios.get(config.wisyAPI)
//   // The value we return becomes the `fulfilled` action payload
//   return data
// })

export const categorySlice = createSlice({
  name: 'category',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    setCurrentCategory: (state, action) => {
      state.currentCategory = action.payload
    },
    // Use the PayloadAction type to declare the contents of `action.payload`
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  // extraReducers: builder => {
  //   builder
  //     .addCase(fetchInitial.pending, state => {
  //       state.status = 'loading'
  //     })
  //     .addCase(fetchInitial.fulfilled, (state, action) => {
  //       state.status = 'idle'
  //       state.content = action.payload
  //     })
  //     .addCase(fetchInitial.rejected, state => {
  //       state.status = 'failed'
  //     })
  // },
})

export const {setCurrentCategory} = categorySlice.actions

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`
// export const selectCount = (state: RootState) => state.counter.value

// We can also write thunks by hand, which may contain both sync and async logic.
// Here's an example of conditionally dispatching actions based on current state.
// export const incrementIfOdd =
//   (amount: number): AppThunk =>
//   (dispatch, getState) => {
//     const currentValue = selectCount(getState())
//     if (currentValue % 2 === 1) {
//       dispatch(incrementByAmount(amount))
//     }
//   }

export default categorySlice.reducer