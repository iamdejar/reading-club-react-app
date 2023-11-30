import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Member } from 'components/MemberCard/types'

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
  async (id: string) => {
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
const addMember = createAsyncThunk(
  'appReducer/deleteMember',
  async (data: Member) => {
    await axInstance({
      method: 'post',
      url: `/members`,
      data: data,
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
    memberInModal: null,
  },
  reducers: {
    setAdminAuth(state, action) {
      state.isAdminAuth = action.payload
    },
    setMemberInModal(state, action) {
      state.memberInModal = action.payload
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
export const { setAdminAuth, setMemberInModal } = appReducer.actions
export { getMembers, deleteMember, addMember }
