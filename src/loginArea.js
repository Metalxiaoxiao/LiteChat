import React, { Component, useState } from 'react';
import { View, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { TextInput, Button, Chip } from 'react-native-paper';
import StorageUtil from './storage';
import { useDispatch, useSelector } from 'react-redux';
import { onSendingMessage } from './redux/Slices/WsController';
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


const LoginArea = () => {
  const dispatch = useDispatch();
  const connectionState = useSelector((state) => state.WsController.WsConnected);
  const [accont, onChangeAccont] = React.useState('');
  const [password, onChangePassword] = React.useState('');
  return (
    <>
      {
        connectionState ? null : (<Chip avatar={<ActivityIndicator size="small" color="#999999" />}>与服务器的连接断开，正在重连</Chip>)
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
            dispatch(onSendingMessage({
              userid: accont,
              password: password
            }))
          }
        }>
          登录
        </Button>
      </View>
    </>
  );
}

export default LoginArea;