import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const axInstance = axios.create({
  baseURL: 'http://localhost:4000',
})

const getMembers = createAsyncThunk('appReducer/getMembers', async (data) => {
  const members = await axInstance({
    method: 'get',
    url: '/members',
  }).then((res) => res.data)

  return members
})

const appReducer = createSlice({
  name: 'appReducer',
  initialState: {
    members: [],
    isAdmin: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getMembers.fulfilled, (state, action) => {
      state.members = action.payload
    })
  },
})

export default appReducer.reducer
export { getMembers }
