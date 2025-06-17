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
import { FontAwesome } from '@expo/vector-icons';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite, tintColorGreenDark } from '~/src/constants/colors';
import { db } from '~/utils/firebase';
import { doc, getDoc } from 'firebase/firestore';

export default function IntegracaoDosEstudantesScreen() {
  const [conteudo, setConteudo] = useState<{
    title: string;
    texto: string;
    download?: string;
  } | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function carregarConteudo() {
      try {
        const docRef = doc(db, 'servicos', 'integracaoDosEstudantes');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo(docSnap.data() as any);
        } else {
          console.warn('Documento "integracaoEstudantes" não encontrado.');
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

        {conteudo.download && (
          <TouchableOpacity
            style={styles.button}
            onPress={() => Linking.openURL(conteudo.download!)}>
            <Text style={styles.buttonText}>Baixar Arquivo</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: tintColorGreenDark,
    padding: 14,
    borderRadius: 10,
    marginTop: 24,
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
