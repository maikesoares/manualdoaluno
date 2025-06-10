import React, { useEffect, useState } from 'react';
import { View, Text, Image, ScrollView, ActivityIndicator } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';

import { servicosStyle } from '~/src/styles/serviceStyle';
import { db } from '~/utils/firebase';

export default function ConceitoScreen() {
  const [conteudo, setConteudo] = useState<{
    title: string;
    subtitle: string;
    texto: string;
  } | null>(null);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarConteudo = async () => {
      try {
        const docRef = doc(db, 'servicos', 'conceito');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo(docSnap.data() as any);
        } else {
          console.warn('Documento "conceito" não encontrado.');
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
      <View style={servicosStyle.header}>
        <Text style={servicosStyle.title}>{conteudo.title}</Text>
        <Text style={servicosStyle.subtitle}>{conteudo.subtitle}</Text>
      </View>

      <View style={servicosStyle.iconsRow}>
        <MaterialIcons name="school" size={24} color="black" />
        <MaterialIcons name="local-hospital" size={24} color="black" />
        <MaterialIcons name="restaurant" size={24} color="black" />
        <MaterialIcons name="directions-bus" size={24} color="black" />
        <MaterialIcons name="sports-soccer" size={24} color="black" />
        <MaterialIcons name="work" size={24} color="black" />
        <MaterialIcons name="handshake" size={24} color="black" />
      </View>

      <View style={servicosStyle.content}>
        <Text style={servicosStyle.text}>{conteudo.texto}</Text>
      </View>

      <View style={servicosStyle.footer}>
        <Image source={require('~/assets/logo.png')} style={servicosStyle.logo} />
        <Text style={servicosStyle.footerText}>
          Diretoria de Assuntos Estudantis e Comunitários
        </Text>
      </View>
    </ScrollView>
  );
}
