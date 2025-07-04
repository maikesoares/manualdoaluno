import React from 'react';
import { View, StyleSheet } from 'react-native';
import { router } from 'expo-router';
import { Welcome } from '~/src/components/welcome';
import { Button } from '~/src/components/button';

export default function WelcomeScreen() {
  const handleNavigateAluno = () => {
    router.replace('/menu');
  };
  const handleNavigateAdm = () => {
    router.replace('/(stacks)/login');
  };

  return (
    <View style={styles.main}>
      <Welcome />
      <View style={styles.boxButtom}>
        <Button labelButton={'Sou Aluno'} onPress={handleNavigateAluno} />
        <Button labelButton={'Sou ADM'} onPress={handleNavigateAdm} />
      </View>
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
  boxButtom: {
    gap: 15,
  },
});
