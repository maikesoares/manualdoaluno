import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  ScrollView,
  ActivityIndicator,
  StyleSheet,
  TouchableOpacity,
  Linking,
} from 'react-native';
import { FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite, tintColorGreenDark } from '~/src/constants/colors';
import { db, auth } from '~/utils/firebase';
import { doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'expo-router';

export default function IntegracaoDosEstudantesScreen() {
  const [conteudo, setConteudo] = useState<{
    title: string;
    texto: string;
    download?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    async function carregarConteudo() {
      try {
        const docRef = doc(db, 'servicos', 'integracaoDosEstudantes');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo(docSnap.data() as any);
        } else {
          console.warn('Documento "integracaoDosEstudantes" não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar conteúdo:', error);
      } finally {
        setLoading(false);
      }
    }

    carregarConteudo();
  }, []);

  if (loading) {
    return (
      <View style={servicosStyle.container}>
        <ActivityIndicator size="large" color={tintColorGreenDark} />
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
    <ScrollView contentContainerStyle={[servicosStyle.container, { flexGrow: 1 }]}>
      <View style={[servicosStyle.card, { flex: 1, justifyContent: 'space-between' }]}>
        <View>
          <View style={servicosStyle.header}>
            <FontAwesome name="weixin" size={50} color={tintColorWhite} />
            <Text style={servicosStyle.title}>{conteudo.title}</Text>
          </View>

          <Text style={servicosStyle.body}>{conteudo.texto}</Text>
        </View>

        <View>
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
                  pathname: '/(stacks)/editarEstudantesIngressantes',
                  params: {
                    title: conteudo.title,
                    texto: conteudo.texto,
                    download: conteudo.download || '',
                  },
                })
              }>
              <MaterialCommunityIcons name="square-edit-outline" size={20} color={tintColorWhite} />
              <Text style={[styles.buttonText, { marginLeft: 8 }]}>Editar conteúdo</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: tintColorGreenDark,
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  buttonText: {
    color: tintColorWhite,
    fontWeight: 'bold',
    fontSize: 16,
  },
});
