import React from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Welcome } from '~/src/components/welcome';
import { Button } from '~/src/components/button';

export default function WelcomeScreen() {
  const handleNavigate = () => {
    router.replace('/menu');
  };

  return (
    <View style={styles.main}>
      <Welcome />
      <Button labelButton={'Iniciar'} onPress={handleNavigate} />
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: '#f1f1f1',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    textAlign: 'center',
  },
});
