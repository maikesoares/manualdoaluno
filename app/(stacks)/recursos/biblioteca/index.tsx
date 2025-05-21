import { doc, getDoc } from 'firebase/firestore';
import React, { useEffect, useState } from 'react';
import { Text, ScrollView, StyleSheet, View, Linking, ActivityIndicator } from 'react-native';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenDark,
  tintColorGreenDarkOpacity,
  tintColorWhite,
} from '~/src/constants/colors';
import db from '~/utils/firebase';

export default function BibliotecaScreen() {
  const [dados, setDados] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function buscarBiblioteca() {
      const docRef = doc(db, 'recursos', 'biblioteca');
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        return docSnap.data();
      } else {
        console.log('Documento não encontrado');
        return null;
      }
    }

    const carregarDados = async () => {
      const resultado = await buscarBiblioteca();
      setDados(resultado);
      setLoading(false);
    };

    carregarDados();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={tintColorGreenDark} />
      </View>
    );
  }

  const openLink = () => {
    Linking.openURL('https://biblioteca.ifnmg.edu.br');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.heading}>{dados.title}</Text>

        {dados.conteudo.map((item: any, index: number) => (
          <View key={index}>
            {item.titulo !== 'LINK' && (
              <>
                <Text style={styles.subHeading}>{item.title}</Text>
                <Text style={styles.paragraph}>{item.texto}</Text>
              </>
            )}
          </View>
        ))}

        <Text style={styles.paragraph}>
          Acesso ao catálogo online:{' '}
          <Text style={styles.link} onPress={openLink}>
            {dados.conteudo.find((item: any) => item.title === 'LINK')?.link}
          </Text>
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: tintColorBackGround },
  card: {
    backgroundColor: tintColorWhite,
    margin: 16,
    padding: 16,
    borderRadius: 12,
    shadowColor: tintColorBlack,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    elevation: 4,
  },
  heading: {
    fontSize: 26,
    fontWeight: 'bold',
    color: tintColorWhite,
    textAlign: 'center',
    marginBottom: 20,
    backgroundColor: tintColorGreenDark,
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
  },
  subHeading: {
    fontSize: 16,
    fontWeight: 'bold',
    color: tintColorGreenDarkOpacity,
    marginTop: 16,
    marginBottom: 8,
  },
  paragraph: {
    fontSize: 14,
    color: tintColorBlack,
    marginBottom: 8,
    textAlign: 'justify',
  },
  link: {
    color: tintColorGreenDark,
    textDecorationLine: 'underline',
  },
});
