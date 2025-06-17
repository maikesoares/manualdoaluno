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
import { FontAwesome } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorWhite, tintColorGreenDark } from '~/src/constants/colors';
import { db } from '~/utils/firebase';

export default function InclusaoDigitalScreen() {
  const [conteudo, setConteudo] = useState<{
    title: string;
    texto: string;
    subText?: string;
    download?: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarConteudo = async () => {
      try {
        const docRef = doc(db, 'servicos', 'inclusaoDigital');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo(docSnap.data() as any);
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
    <ScrollView contentContainerStyle={[servicosStyle.container, { flexGrow: 1 }]}>
      <View style={[servicosStyle.card, { flex: 1, justifyContent: 'space-between' }]}>
        <View>
          <View style={servicosStyle.header}>
            <FontAwesome name="laptop" size={50} color={tintColorWhite} />
            <Text style={servicosStyle.title}>{conteudo.title}</Text>
          </View>

          <Text style={servicosStyle.body}>{conteudo.texto}</Text>

          {conteudo.subText && (
            <Text style={[servicosStyle.body, { marginTop: 16 }]}>{conteudo.subText}</Text>
          )}
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
    padding: 12,
    borderRadius: 8,
    marginTop: 24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonText: {
    color: tintColorWhite,
    fontWeight: 'bold',
  },
});
