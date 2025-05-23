import React, { useEffect, useState } from 'react';
import { View, Text, ScrollView, ActivityIndicator, TouchableOpacity, Linking } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { tintColorGreenDark, tintColorWhite } from '~/src/constants/colors';
import db from '~/utils/firebase';

export default function MoradiaEstudantilScreen() {
  const [conteudo, setConteudo] = useState<{
    title: string;
    texto: string;
    download: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarConteudo = async () => {
      try {
        const docRef = doc(db, 'servicos', 'moradiaEstudantil');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo(docSnap.data() as any);
        } else {
          console.warn('Documento "moradia" não encontrado.');
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
          <MaterialIcons name="home" size={50} color={tintColorWhite} />
          <Text style={servicosStyle.title}>{conteudo.title}</Text>
        </View>
        <Text style={servicosStyle.body}>{conteudo.texto}</Text>

        {conteudo.download && (
          <TouchableOpacity
            style={{
              backgroundColor: tintColorGreenDark,
              padding: 12,
              borderRadius: 8,
              marginTop: 'auto',
              alignItems: 'center',
            }}
            onPress={() => Linking.openURL(conteudo.download!)}>
            <Text style={{ color: 'white', fontWeight: 'bold' }}>Baixar Arquivo</Text>
          </TouchableOpacity>
        )}
      </View>
    </ScrollView>
  );
}
