import * as React from 'react';
import { AppRegistry } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { name as appName } from './app.json';
import App from './App';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EluaPage from './JS/EluaPage';
import Index from './JS/Index';

const Stack = createNativeStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <PaperProvider>
      <Stack.Navigator>
      <Stack.Screen name="LoginPage" component={App} options={{ title: "Log In" }} />
      <Stack.Screen name="ELUA" component={EluaPage} options={{ title: "ELUA 最终用户许可协议" }} />
      <Stack.Screen name="IndexPage" component={Index} options={{ title: "LiteChat" }} />
      </Stack.Navigator>
      </PaperProvider>
    </NavigationContainer>
  );
}

AppRegistry.registerComponent(appName, () => Main);