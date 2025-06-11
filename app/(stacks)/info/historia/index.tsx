import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator, Button } from 'react-native';
import { doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';

import { auth, db } from '~/utils/firebase';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenDark,
  tintColorGreenLight,
  tintColorWhite,
} from '~/src/constants/colors';
import { useRouter } from 'expo-router';

export default function HistoriaScreen() {
  const [conteudo, setConteudo] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchHistoria = async () => {
      try {
        const docRef = doc(db, 'informacoes', 'historia');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setConteudo(docSnap.data());
        } else {
          setConteudo({ introducao: 'Documento não encontrado.' });
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setConteudo({ introducao: 'Erro ao carregar dados.' });
      } finally {
        setLoading(false);
      }
    };

    fetchHistoria();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={tintColorGreenLight} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>{conteudo?.title}</Text>

        <Text style={styles.text}>{conteudo?.introducao}</Text>
        <Text style={styles.text}>{conteudo?.contexto}</Text>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Escola de Iniciação Agrícola de Salinas</Text>
          <Text style={styles.text}>{conteudo?.escolaSalinas}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campus Januária</Text>
          <Text style={styles.text}>{conteudo?.campusJanuaria}</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Campus Pirapora</Text>
          <Text style={styles.text}>{conteudo?.campusPirapora}</Text>
        </View>
      </View>
      {user && (
        <Button
          title="Editar conteúdo"
          onPress={() =>
            router.push({
              pathname: '/(stacks)/editarHistoria',
              params: {
                introducao: conteudo?.introducao,
                contexto: conteudo?.contexto,
                title: conteudo?.title,
                escolaSalinas: conteudo?.escolaSalinas,
                campusPirapora: conteudo?.campusPirapora,
                campusJanuaria: conteudo?.campusJanuaria,
              },
            })
          }
        />
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: tintColorBackGround,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: tintColorBackGround,
  },
  card: {
    backgroundColor: tintColorWhite,
    borderRadius: 10,
    padding: 20,
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: tintColorGreenLight,
    marginBottom: 16,
    textAlign: 'center',
    borderBottomWidth: 2,
    borderBottomColor: tintColorGreenDark,
    paddingBottom: 10,
  },
  section: {
    marginTop: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: tintColorGreenLight,
    marginBottom: 8,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
    textAlign: 'justify',
    color: tintColorBlack,
    marginBottom: 12,
  },
});
