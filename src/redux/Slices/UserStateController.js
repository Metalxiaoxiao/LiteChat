import { createSlice } from '@reduxjs/toolkit'

export const UserStateSlice = createSlice({
    name: 'UserStateController',
    initialState: {
        username: null,
        password: null,
        userid: null,
        IsLogined: null
    },
    reducers: {
        onLogin: (state, action) => {
            state.userid = action.payload.userid;
            state.IsLogined = true;
            state.password = action.payload.password;
            state.username = action.payload.username;
        },
        onLogout: state => {
            state.userid = null;
            state.IsLogined = false;
            state.password = null;
            state.username = null;
        }
    }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { onLogin, onLogout } = counterSlice.actions

export default UserStateSlice.reducer