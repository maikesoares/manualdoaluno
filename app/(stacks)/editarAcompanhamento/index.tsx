import React, { useState } from 'react';
import { Text, TextInput, TouchableOpacity, StyleSheet, Alert, ScrollView } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '~/utils/firebase';
import { tintColorGreenDark, tintColorWhite } from '~/src/constants/colors';

export default function EditarAcompanhamentoScreen() {
  const { title, texto, download } = useLocalSearchParams<{
    title: string;
    texto: string;
    download?: string;
  }>();

  const [novoTitle, setNovoTitle] = useState(title || '');
  const [novoTexto, setNovoTexto] = useState(texto || '');
  const [novoDownload, setNovoDownload] = useState(download || '');

  const router = useRouter();

  const handleSalvar = async () => {
    try {
      const docRef = doc(db, 'servicos', 'acompanhamentoSocial');
      await updateDoc(docRef, {
        title: novoTitle,
        texto: novoTexto,
        download: novoDownload,
      });

      Alert.alert('Sucesso', 'Conteúdo atualizado com sucesso!');
      router.back();
    } catch (error) {
      console.error('Erro ao salvar conteúdo:', error);
      Alert.alert('Erro', 'Ocorreu um erro ao salvar as alterações.');
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.label}>Título</Text>
      <TextInput
        style={styles.input}
        value={novoTitle}
        onChangeText={setNovoTitle}
        placeholder="Digite o título"
      />

      <Text style={styles.label}>Texto</Text>
      <TextInput
        style={[styles.input, { height: 120 }]}
        multiline
        value={novoTexto}
        onChangeText={setNovoTexto}
        placeholder="Digite o texto"
      />

      <Text style={styles.label}>Link para download (opcional)</Text>
      <TextInput
        style={styles.input}
        value={novoDownload}
        onChangeText={setNovoDownload}
        placeholder="Cole aqui o link"
      />

      <TouchableOpacity style={styles.button} onPress={handleSalvar}>
        <Text style={styles.buttonText}>Salvar Alterações</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontWeight: 'bold',
    marginBottom: 6,
    marginTop: 20,
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#f9f9f9',
  },
  button: {
    backgroundColor: tintColorGreenDark,
    padding: 14,
    borderRadius: 8,
    marginTop: 32,
    alignItems: 'center',
  },
  buttonText: {
    color: tintColorWhite,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
