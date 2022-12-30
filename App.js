/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React,{useEffect} from 'react';
import type { Node } from 'react';
import LoginArea from './JS/loginArea';
import StorageUtil from './JS/storage';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View
} from 'react-native';

import {
  Colors,

} from 'react-native/Libraries/NewAppScreen';
import { Button } from 'react-native-paper';

/* $FlowFixMe[missing-local-annot] The type annotation(s) required by Flow's
 * LTI update could not be added via codemod */
const Section = ({ children, title }): Node => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};



const App: () => Node = ({ navigation }) => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  const [IsWsClosed, onChangeWsState] = React.useState(false);   

  function connect(){
    ws = new WebSocket("ws://106.53.58.190:4000");
    ws.onopen = function () {
      console.log("ws connected");
      if (IsWsClosed) {
        onChangeWsState(false);
      }
    }
    ws.onclose = function () {
      timeout = setTimeout(() => {
        connect()
      }, 5000);
        onChangeWsState(true);
    };
    ws.onmessage = function (evt) {
      console.log(evt.data);
      var data = JSON.parse(evt.data);
      if (data.type == "登录返回结果") {
        if(data.state == "success"){
          navigation.navigate('ELUA');
        }else{

        }
      }
    }
    ws.onerror = function (e) {
      console.log(e);
    }
  }
  connect();

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Section title="登录">
            欢迎使用 <Text style={styles.highlight}>LiteChat</Text> ，请输入账号密码以登录
          </Section>
          <View style={styles.sectionContainer}>
            <LoginArea IsWsClosed={IsWsClosed} ws={ws} />
          </View>
          <Button onPress={() => navigation.navigate('IndexPage')}>
            许可协议
          </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
