import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
     
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    Reset: (state) => {
        state.value = 0
    }
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement,Reset } = counterSlice.actions

export default counterSlice.reducer