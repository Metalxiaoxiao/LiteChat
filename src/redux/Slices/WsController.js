import { createSlice } from '@reduxjs/toolkit'
import { onLogin } from './UserStateController';
import { useDispatch } from 'react-redux';

export const WsControllerSlice = createSlice({
    name: 'WsController',
    initialState: {
        recvedMessages: null,
        unsendedMessages: null,
        WsConnected: true,
        ws:undefined
    },
    reducers: {
        onRecievedMessage: (state, action) => {
            switch (action.payload.type){
                case '登录返回结果':
                    dispatch(onLogin(action.payload));
                    break;
            }
            
            state.recvedMessages = action.payload;
        },
        onSendingMessage: (state, action) => {
            state.unsendedMessages = action.payload;
            if(state.WsConnected){
                state.ws.send(JSON.stringify(action.payload))
            }else{
                console.log("Message sending failed");
            }
        },
        onWsClosed: state => {
            state.WsConnected = false;
        },
        onWsOpened: (state,action) => {
            state.WsConnected = true;
            state.ws = action.payload;
        }
    }
})
// 每个 case reducer 函数会生成对应的 Action creators
export const { onRecievedMessage, onSendingMessage, onWsClosed, onWsOpened } = counterSlice.actions

export default WsControllerSlice.reducer