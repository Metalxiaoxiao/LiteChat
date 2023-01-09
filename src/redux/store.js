import { configureStore } from '@reduxjs/toolkit';
import WsController from './Slices/WsController';
import UserStateController from './Slices/UserStateController';

export default configureStore({
  reducer: {
      WsController:WsController,
      UserStateController:UserStateController
  },
});