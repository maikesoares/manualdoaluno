import { router } from 'expo-router';
import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { tintColorBlack, tintColorGreenDark, tintColorWhite } from '~/src/constants/colors';
import { loginWithEmail } from '~/src/services/authService';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const user = await loginWithEmail(email, password);
      console.log('Usuário logado:', user.email);
      router.replace('/menu');
    } catch (error: any) {
      console.error('Erro ao logar:', error.message);
      Alert.alert('Erro no Login', 'Email ou senha incorretos. Tente novamente.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <Text style={styles.label}>Email</Text>
      <TextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Digite seu e-mail"
        placeholderTextColor="#AAAAAA"
        style={styles.input}
      />

      <Text style={styles.label}>Senha</Text>
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Digite sua senha"
        placeholderTextColor="#AAAAAA"
        secureTextEntry
        style={styles.input}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tintColorWhite,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    color: tintColorGreenDark,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
  },
  label: {
    fontSize: 16,
    color: tintColorGreenDark,
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: tintColorGreenDark,
    borderRadius: 8,
    padding: 10,
    marginBottom: 20,
    color: tintColorBlack,
  },
  button: {
    backgroundColor: tintColorGreenDark,
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: tintColorWhite,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
