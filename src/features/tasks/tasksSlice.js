import { v4 as uuid } from 'uuid'
import { createSlice } from '@reduxjs/toolkit'
import { getTestTasks } from '../../services/getTestTasks'

const initialState = {
  tasks: getTestTasks(),
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      state.tasks.push({ ...action.payload, id: uuid() })
    },
    removeTask: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload)
    },
    resetTasks: (state) => {
      state.tasks = []
    },
    setTasks: (state, action) => {
      state.tasks = action.payload
    },
  },
})

export const { addTask, removeTask, resetTasks, setTasks } = tasksSlice.actions
export default tasksSlice.reducer
