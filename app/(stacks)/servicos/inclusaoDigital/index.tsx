import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  StyleSheet,
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'expo-router';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite, tintColorGreenDark } from '~/src/constants/colors';
import { db, auth } from '~/utils/firebase';

export default function InclusaoDigitalScreen() {
  const [conteudo, setConteudo] = useState<{
    title: string;
    texto: string;
    subText: string;
    subText1: string;
    subText2: string;
    download?: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const carregarConteudo = async () => {
      try {
        const docRef = doc(db, 'servicos', 'inclusaoDigital');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo({
            title: '',
            texto: '',
            subText: '',
            subText1: '',
            subText2: '',
            ...docSnap.data(),
          } as any);
        } else {
          console.warn('Documento "inclusaoDigital" não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar conteúdo:', error);
      } finally {
        setLoading(false);
      }
    };

    carregarConteudo();
  }, []);

  if (loading) {
    return (
      <View style={servicosStyle.container}>
        <ActivityIndicator size="large" color="green" />
      </View>
    );
  }

  if (!conteudo) {
    return (
      <View style={servicosStyle.container}>
        <Text>Conteúdo não encontrado.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={servicosStyle.container}>
      <View style={servicosStyle.card}>
        <View style={servicosStyle.header}>
          <FontAwesome name="laptop" size={40} color={tintColorWhite} />
          <Text style={servicosStyle.title}>{conteudo.title}</Text>
        </View>

        <Text style={servicosStyle.body}>
          {conteudo.texto}
          {'\n'}
        </Text>
        <Text style={servicosStyle.body}>
          {conteudo.subText}
          {'\n'}
        </Text>
        <Text style={servicosStyle.body}>
          {conteudo.subText1}
          {'\n'}
        </Text>
        <Text style={servicosStyle.body}>{conteudo.subText2}</Text>

        {conteudo.download && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(conteudo.download!)}>
            <Text style={styles.buttonText}>Baixar Arquivo</Text>
          </TouchableOpacity>
        )}

        {user && (
          <TouchableOpacity
            style={[styles.button, { marginTop: 16 }]}
            onPress={() =>
              router.push({
                pathname: '/(stacks)/editarInclusao',
                params: {
                  title: conteudo.title,
                  texto: conteudo.texto,
                  subText: conteudo.subText,
                  subText1: conteudo.subText1,
                  subText2: conteudo.subText2,
                  download: conteudo.download || '',
                },
              })
            }>
            <MaterialCommunityIcons name="square-edit-outline" size={20} color={tintColorWhite} />
            <Text style={[styles.buttonText, { marginLeft: 8 }]}>Editar conteúdo</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: tintColorGreenDark,
    padding: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: tintColorWhite,
    fontWeight: 'bold',
  },
});
