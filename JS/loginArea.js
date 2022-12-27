import React, { Component, useState } from 'react';
import { View,StyleSheet } from 'react-native';
import { TextInput, Button, Switch, Text } from 'react-native-paper';

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
  const [accont, onChangeAccont] = React.useState('');
  const [password, onChangePassword] = React.useState('');

  return (
    <>
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
      textContentType ="password"
      secureTextEntry = {true}
        mode="outlined"
        label="密码"
        onChangeText={text => onChangePassword(text)}
        value={password}
      />
    </View>
    <View style={styles.sectionContainer}>
    <Button mode="contained" onPress={
      function(){
        
      }
    }>
        登录
      </Button> 
    </View>
    </>
  );
}

export default LoginArea;