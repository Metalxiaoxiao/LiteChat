import * as React from 'react';
import { View,StyleSheet} from 'react-native';
import { Text } from 'react-native-paper';

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  }})
const EluaPage = () => {

  return (
    <View style={styles.sectionContainer}>
      <Text variant="titleLarge">
        LiteChat 用户许可协议
      </Text>
      <Text variant="bodyLarge">LiteChat 是个人开发的轻量级开源聊天软件。
      </Text>
      <Text variant="bodyLarge">
        本许可协议授权您有权使用，更改，分发本软件的任何部分，并可以用于任何用途，但必须标注来源（即必须标注使用LiteChat）。
        请注意，“任何用途”不包括违法用途。LiteChat对可能产生的任何法律后果概不负责。
      </Text>
    </View>
  );
};

export default EluaPage;