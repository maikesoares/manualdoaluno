import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Recursos } from '~/src/components/recursos';
import { tintColorBackGround } from '~/src/constants/colors';

export default function RecursosScreen() {
  return (
    <View style={styles.container}>
      <Recursos />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: tintColorBackGround,
  },
});
