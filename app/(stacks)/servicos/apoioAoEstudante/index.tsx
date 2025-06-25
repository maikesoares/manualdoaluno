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
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'expo-router';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite, tintColorGreenDark } from '~/src/constants/colors';
import { db, auth } from '~/utils/firebase';

export default function ApoioAoEstudanteScreen() {
  const [conteudo, setConteudo] = useState<{
    title: string;
    texto: string;
    permanenciaI: string;
    permanenciaII: string;
    permanenciaIII: string;
    download?: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    const carregarConteudo = async () => {
      try {
        const docRef = doc(db, 'servicos', 'apoioAoEstudante');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo(docSnap.data() as any);
        } else {
          console.warn('Documento "apoioAoEstudante" não encontrado.');
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
          <MaterialIcons name="groups" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>{conteudo.title}</Text>
        </View>
        <View>
          <Text style={servicosStyle.bodyText}>{conteudo.texto}</Text>
          <Text style={servicosStyle.bodyText}>{conteudo.permanenciaI}</Text>
          <Text style={servicosStyle.bodyText}>{conteudo.permanenciaII}</Text>
          <Text style={servicosStyle.bodyText}>{conteudo.permanenciaIII}</Text>
        </View>

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
                pathname: '/(stacks)/editarApoio',
                params: {
                  title: conteudo.title,
                  texto: conteudo.texto,
                  permanenciaI: conteudo.permanenciaI,
                  permanenciaII: conteudo.permanenciaII,
                  permanenciaIII: conteudo.permanenciaIII,
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
