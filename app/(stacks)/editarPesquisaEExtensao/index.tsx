import React, { useState } from 'react';
import {
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
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

export default function EditarPesquisaEExtensaoScreen() {
  const router = useRouter();
  const { title, texto, subText, subText1, subText2, subText3, download } = useLocalSearchParams();

  const [novoTitle, setNovoTitle] = useState(title as string);
  const [novoTexto, setNovoTexto] = useState(texto as string);
  const [novoSubText, setNovoSubText] = useState(subText as string);
  const [novoSubText1, setNovoSubText1] = useState(subText1 as string);
  const [novoSubText2, setNovoSubText2] = useState(subText2 as string);
  const [novoSubText3, setNovoSubText3] = useState(subText3 as string);
  const [novoDownload, setNovoDownload] = useState(download as string);

  const salvarAlteracoes = async () => {
    try {
      const docRef = doc(db, 'servicos', 'pesquisaEExtensao');
      await updateDoc(docRef, {
        title: novoTitle,
        texto: novoTexto,
        subText: novoSubText,
        subText1: novoSubText1,
        subText2: novoSubText2,
        subText3: novoSubText3,
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
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
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

          {[novoSubText, novoSubText1, novoSubText2, novoSubText3].map((sub, i) => (
            <View key={i}>
              <Text style={styles.label}>Subtexto {i + 1} (opcional)</Text>
              <TextInput
                style={styles.input}
                value={sub}
                onChangeText={(text) => {
                  switch (i) {
                    case 0:
                      setNovoSubText(text);
                      break;
                    case 1:
                      setNovoSubText1(text);
                      break;
                    case 2:
                      setNovoSubText2(text);
                      break;
                    case 3:
                      setNovoSubText3(text);
                      break;
                  }
                }}
                multiline
              />
            </View>
          ))}

          <Text style={styles.label}>Link para download (opcional)</Text>
          <TextInput
            style={styles.input}
            value={novoDownload}
            onChangeText={setNovoDownload}
            multiline
          />

          <View style={{ marginTop: 'auto' }}>
            <TouchableOpacity style={styles.saveButton} onPress={salvarAlteracoes}>
              <MaterialCommunityIcons name="content-save" size={20} color={tintColorWhite} />
              <Text style={styles.saveText}>Salvar Alterações</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: tintColorBackGround,
    flexGrow: 1,
    padding: 20,
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
