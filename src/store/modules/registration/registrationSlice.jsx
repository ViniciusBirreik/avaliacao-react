import { createSlice } from '@reduxjs/toolkit'

const slice = createSlice({
    name: 'Registration',
    initialState: {
        name: 'abc',
        password: null
    },
    reducers: {
        register(state, { payload }){
            return state.name = payload.name,
            state.password = payload.password
        }
    }
})

export const { register } = slice.actions
export default slice.reducer