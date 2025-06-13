import React, { useState } from 'react';
import {
  Text,
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import { tintColorWhite, tintColorBlack, tintColorGreenDark } from '~/src/constants/colors';

export default function EditarContato() {
  const {
    endereco: enderecoParam,
    telefone: telefoneParam,
    email: emailParam,
    latitude: latitudeParam,
    longitude: longitudeParam,
  } = useLocalSearchParams();

  const [endereco, setEndereco] = useState(String(enderecoParam || ''));
  const [telefone, setTelefone] = useState(String(telefoneParam || ''));
  const [email, setEmail] = useState(String(emailParam || ''));
  const [latitude, setLatitude] = useState(String(latitudeParam || ''));
  const [longitude, setLongitude] = useState(String(longitudeParam || ''));

  const router = useRouter();

  const salvar = async () => {
    try {
      const docRef = doc(db, 'informacoes', 'contato');
      await updateDoc(docRef, {
        endereco,
        telefone,
        email,
        latitude: parseFloat(latitude),
        longitude: parseFloat(longitude),
      });
      Alert.alert('Sucesso', 'Dados de contato atualizados com sucesso!');
      router.back();
    } catch (error) {
      console.error(error);
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Endereço</Text>
        <TextInput
          style={styles.input}
          value={endereco}
          onChangeText={setEndereco}
          placeholder="Digite o endereço"
        />

        <Text style={styles.label}>Telefone</Text>
        <TextInput
          style={styles.input}
          value={telefone}
          onChangeText={setTelefone}
          placeholder="Digite o telefone"
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Digite o email"
          keyboardType="email-address"
        />

        <Text style={styles.label}>Latitude</Text>
        <TextInput
          style={styles.input}
          value={latitude}
          onChangeText={setLatitude}
          placeholder="Digite a latitude"
          keyboardType="numeric"
        />

        <Text style={styles.label}>Longitude</Text>
        <TextInput
          style={styles.input}
          value={longitude}
          onChangeText={setLongitude}
          placeholder="Digite a longitude"
          keyboardType="numeric"
        />

        <Button title="Salvar" color={tintColorGreenDark} onPress={salvar} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: tintColorWhite,
    padding: 20,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 8,
    color: tintColorBlack,
  },
  input: {
    borderWidth: 1,
    borderColor: tintColorBlack,
    padding: 10,
    marginBottom: 20,
    borderRadius: 8,
  },
});
