import { configureStore } from '@reduxjs/toolkit'
import CounterSlicer from '../redux/CounterSlicer'

export const store = configureStore({
  reducer: {
    counterData: CounterSlicer
  },
})