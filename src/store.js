import { configureStore } from '@reduxjs/toolkit'
import tasksReducer from './features/tasks/tasksSlice'
import filterReducer from './features/filter/filterSlice'

const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filter: filterReducer,
  },
})

export default store
