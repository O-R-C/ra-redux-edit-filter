import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filter: '',
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload
    },
    resetFilter: (state) => {
      state.filter = ''
    },
  },
})

export const getFilter = (state) => state.filter.filter

export const { setFilter, resetFilter } = filterSlice.actions
export default filterSlice.reducer
