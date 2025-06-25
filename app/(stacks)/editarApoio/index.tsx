import React, { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  ScrollView,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import {
  tintColorBackGround,
  tintColorGreenDark,
  tintColorGreenLight,
  tintColorWhite,
  tintColorBlack,
} from '~/src/constants/colors';
import { db } from '~/utils/firebase';

export default function EditarApoioScreen() {
  const router = useRouter();
  const { title, texto, permanenciaI, permanenciaII, permanenciaIII, download } =
    useLocalSearchParams();

  const [novoTitle, setNovoTitle] = useState(title as string);
  const [novoTexto, setNovoTexto] = useState(texto as string);
  const [novoP1, setNovoP1] = useState(permanenciaI as string);
  const [novoP2, setNovoP2] = useState(permanenciaII as string);
  const [novoP3, setNovoP3] = useState(permanenciaIII as string);
  const [novoDownload, setNovoDownload] = useState(download as string);

  const salvarAlteracoes = async () => {
    try {
      const docRef = doc(db, 'servicos', 'apoioAoEstudante');
      await updateDoc(docRef, {
        title: novoTitle,
        texto: novoTexto,
        permanenciaI: novoP1,
        permanenciaII: novoP2,
        permanenciaIII: novoP3,
        download: novoDownload,
      });
      Alert.alert('Sucesso', 'Conteúdo atualizado com sucesso!');
      router.back();
    } catch (error) {
      console.error('Erro ao atualizar:', error);
      Alert.alert('Erro', 'Não foi possível atualizar o conteúdo.');
    }
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: tintColorBackGround }}
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}
      keyboardVerticalOffset={100}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.label}>Título</Text>
          <TextInput style={styles.input} value={novoTitle} onChangeText={setNovoTitle} multiline />

          <Text style={styles.label}>Texto principal</Text>
          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            multiline
            value={novoTexto}
            onChangeText={setNovoTexto}
          />

          <Text style={styles.label}>Permanência I</Text>
          <TextInput style={styles.input} value={novoP1} onChangeText={setNovoP1} multiline />

          <Text style={styles.label}>Permanência II</Text>
          <TextInput style={styles.input} value={novoP2} onChangeText={setNovoP2} multiline />

          <Text style={styles.label}>Permanência III</Text>
          <TextInput style={styles.input} value={novoP3} onChangeText={setNovoP3} multiline />

          <Text style={styles.label}>Link para download (opcional)</Text>
          <TextInput
            style={styles.input}
            value={novoDownload}
            onChangeText={setNovoDownload}
            multiline
          />

          <TouchableOpacity style={styles.saveButton} onPress={salvarAlteracoes}>
            <MaterialCommunityIcons name="content-save" size={20} color={tintColorWhite} />
            <Text style={styles.saveText}>Salvar Alterações</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    padding: 20,
  },
  container: {
    flexGrow: 1,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
    color: tintColorBlack,
  },
  input: {
    backgroundColor: tintColorWhite,
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: tintColorGreenLight,
  },
  saveButton: {
    flexDirection: 'row',
    backgroundColor: tintColorGreenDark,
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText: {
    color: tintColorWhite,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});
