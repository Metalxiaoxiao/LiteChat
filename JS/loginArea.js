import React, { Component, useState } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { TextInput, Button, Chip } from 'react-native-paper';
import StorageUtil from './storage';
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 10,
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


const LoginArea = (prop) => {
  const [accont, onChangeAccont] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <>
      {
        prop.IsWsClosed ? (
          <Chip avatar={<ActivityIndicator size="small" color="#999999" />}>与服务器的连接断开，正在重连</Chip>
        ) : null
      }
      <View style={styles.sectionContainer}>
        <TextInput
          mode="outlined"
          label="账号"
          onChangeText={text => onChangeAccont(text)}
          value={accont}
        />
      </View>
      <View style={styles.sectionContainer}>
        <TextInput
          autoComplete="password"
          textContentType="password"
          secureTextEntry={true}
          mode="outlined"
          label="密码"
          onChangeText={text => onChangePassword(text)}
          value={password}
        />
      </View>
      <View style={styles.sectionContainer}>
        <Button mode="contained" onPress={
          () => {
            if (prop.ws.readyState == WebSocket.OPEN) {
              prop.ws.send(JSON.stringify(
                {
                  userid: accont,
                  password: password
                }
              ));
              StorageUtil.setItem("userid", accont);
              StorageUtil.setItem("password", password);
            }
          }
        }>
          登录
        </Button>
      </View>
    </>
  );
}

export default LoginArea;