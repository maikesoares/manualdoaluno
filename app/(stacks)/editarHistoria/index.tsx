import React, { useState } from 'react';
import {
  TextInput,
  Button,
  StyleSheet,
  ScrollView,
  Alert,
  Text,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { doc, updateDoc } from 'firebase/firestore';
import { useLocalSearchParams, useRouter } from 'expo-router';

import { db } from '~/utils/firebase';
import { tintColorWhite, tintColorBlack, tintColorGreenDark } from '~/src/constants/colors';

export default function EditarHistoria() {
  const {
    introducao: introParam,
    contexto: contextoParam,
    title: titleParam,
    escolaSalinas: salinasParam,
    campusPirapora: piraporaParam,
    campusJanuaria: januariaParam,
  } = useLocalSearchParams();
  const [introducao, setIntroducao] = useState(String(introParam || ''));
  const [contexto, setContexto] = useState(String(contextoParam || ''));
  const [title, setTitle] = useState(String(titleParam || ''));
  const [escolaSalinas, setSalinas] = useState(String(salinasParam || ''));
  const [campusPirapora, setPirapora] = useState(String(piraporaParam || ''));
  const [campusJanuaria, setJanuaria] = useState(String(januariaParam || ''));
  const router = useRouter();

  const salvar = async () => {
    try {
      const docRef = doc(db, 'informacoes', 'historia');
      await updateDoc(docRef, {
        introducao,
        contexto,
        title,
        escolaSalinas,
        campusPirapora,
        campusJanuaria,
      });
      Alert.alert('Sucesso', 'Conteúdo atualizado com sucesso!');
      router.back();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar.');
      console.error(error);
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={80}>
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.label}>Título</Text>
        <TextInput
          style={styles.input}
          placeholder="Título"
          multiline
          value={title}
          onChangeText={setTitle}
        />
        <Text style={styles.label}>Introdução</Text>
        <TextInput
          style={styles.input}
          placeholder="Introdução"
          multiline
          value={introducao}
          onChangeText={setIntroducao}
        />
        <Text style={styles.label}>Contexto</Text>
        <TextInput
          style={styles.input}
          placeholder="Contexto"
          multiline
          value={contexto}
          onChangeText={setContexto}
        />

        <Text style={styles.label}>Campus Salinas</Text>
        <TextInput
          style={styles.input}
          placeholder="Campus Salinas"
          multiline
          value={escolaSalinas}
          onChangeText={setSalinas}
        />

        <Text style={styles.label}>Campus Januaria</Text>
        <TextInput
          style={styles.input}
          placeholder="Campus Januaria"
          multiline
          value={campusJanuaria}
          onChangeText={setJanuaria}
        />

        <Text style={styles.label}>Campus Pirapora</Text>
        <TextInput
          style={styles.input}
          placeholder="Campus Pirapora"
          multiline
          value={campusPirapora}
          onChangeText={setPirapora}
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
    minHeight: 100,
    textAlignVertical: 'top',
  },
});
