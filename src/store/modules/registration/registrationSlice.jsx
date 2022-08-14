import { createSlice, createEntityAdapter } from '@reduxjs/toolkit'

const adapter = createEntityAdapter({
    selectId: (register) => register.uid
})

export const { selectAll, selectById } = adapter.getSelectors((state) => state.register)

export const RegistrationSlice = createSlice({
    name: 'Registration',
    initialState: adapter.getInitialState(),
    reducers: {
        addUser: adapter.addOne
    }
})

export const { addUser } = RegistrationSlice.actions
export default RegistrationSlice.reducer