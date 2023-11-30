import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const axInstance = axios.create({
  baseURL: 'http://localhost:4000',
})

const getMembers = createAsyncThunk('appReducer/getMembers', async () => {
  const members = await axInstance({
    method: 'get',
    url: '/members',
  }).then((res) => res.data)

  return members
})
const deleteMember = createAsyncThunk(
  'appReducer/deleteMember',
  async (id: number) => {
    await axInstance({
      method: 'delete',
      url: `/members/${id}`,
    }).then((res) => res.data)

    const members = await axInstance({
      method: 'get',
      url: '/members',
    }).then((res) => res.data)

    return members
  }
)

const appReducer = createSlice({
  name: 'appReducer',
  initialState: {
    members: [],
    isAdminAuth: false,
  },
  reducers: {
    setAdminAuth(state, action) {
      state.isAdminAuth = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getMembers.fulfilled, (state, action) => {
        state.members = action.payload
      })
      .addCase(deleteMember.fulfilled, (state, action) => {
        state.members = action.payload
      })
  },
})

export default appReducer.reducer
export const { setAdminAuth } = appReducer.actions
export { getMembers, deleteMember }
