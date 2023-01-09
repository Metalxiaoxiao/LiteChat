import * as React from 'react';
import { AppRegistry } from 'react-native';
import {
  Provider as PaperProvider
} from 'react-native-paper';
import { name as appName } from './app.json';
import App from './src/loginPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EluaPage from './src/EluaPage';
import Index from './src/Index';
import FirstCom from './src/FirstCom';
import store from './src/redux/store';
import { Provider } from 'react-redux';

import { useSelector, useDispatch } from 'react-redux'
import { onRecievedMessage,onSendingmessage,onWsClosed,onWsOpened } from './src/redux/Slices/WsController';
import StorageUtil from './src/storage';
StorageUtil.setItem("LoginState","unlogined")


const Stack = createNativeStackNavigator();

export default function Main() {
  const dispatch = useDispatch();
  function connect(){
    ws = new WebSocket("ws://106.53.58.190:4000");
    ws.onopen = function () {
      dispatch(onWsOpened(ws));
    }
    ws.onclose = function () {
      dispatch(onWsClosed())
      timeout = setTimeout(() => {
        connect()
      }, 5000);
    };
    ws.onmessage = function (evt) {
      console.log(evt.data);
      var data = JSON.parse(evt.data);
      dispatch(onRecievedMessage(data));
    }
  }
  connect();
  return (
    <Provider store={store}>
      <PaperProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="FirstCon" component={FirstCom} options={{ headerShown: false }} />
            <Stack.Screen name="IndexPage" component={Index} options={{ title: "LiteChat" }} />
            <Stack.Screen name="ELUA" component={EluaPage} options={{ title: "ELUA 最终用户许可协议" }} />
            <Stack.Screen name="LoginPage" component={App} options={{ title: "Log In" }} />
          </Stack.Navigator>
        </NavigationContainer>
      </PaperProvider>
    </Provider>
  )
};

AppRegistry.registerComponent(appName, () => Main);