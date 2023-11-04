import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: {
        displayName: 'Admin',
        username: 'admin',
        password: 'admin'
    },
  },
  reducers: {
    login: (state, action) => {
        if(
        state.value.username === action.payload.username &&
        state.value.password === action.payload.password) {
            localStorage.setItem('logged', 'true');
            window.location.href = '/';
        }
    },
    logout: () => {
        localStorage.removeItem('logged');
        window.location.reload();
    }
  },
})

// Action creators are generated for each case reducer function
export const { login, logout } = userSlice.actions

export default userSlice.reducer