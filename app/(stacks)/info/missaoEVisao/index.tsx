import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, ActivityIndicator } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { doc, getDoc } from 'firebase/firestore';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenDark,
  tintColorWhite,
} from '~/src/constants/colors';
import db from '~/utils/firebase';

export default function MissaoEVisaoScreen() {
  const [missao, setMissao] = useState('');
  const [visao, setVisao] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMissaoVisao = async () => {
      try {
        const docRef = doc(db, 'informacoes', 'missaoEvisao');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          setMissao(data.missao);
          setVisao(data.visao);
        } else {
          console.log('Documento não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar missão e visão:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchMissaoVisao();
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={tintColorGreenDark} />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.section}>
        <View style={styles.gridIcon}>
          <Icon name="rocket" size={30} color={tintColorGreenDark} style={styles.icon} />
          <Text style={styles.title}>Missão</Text>
        </View>
        <Text style={styles.subTitle}>{missao}</Text>
      </View>

      <View style={styles.section}>
        <View style={styles.gridIcon}>
          <Icon name="globe" size={30} color={tintColorGreenDark} style={styles.icon} />
          <Text style={styles.title}>Visão</Text>
        </View>
        <Text style={styles.subTitle}>{visao}</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: tintColorBackGround,
    padding: 20,
  },
  section: {
    marginBottom: 20,
    backgroundColor: tintColorWhite,
    borderRadius: 10,
    padding: 15,
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  gridIcon: {
    flexDirection: 'row',
    gap: 10,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: tintColorGreenDark,
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    color: tintColorBlack,
    lineHeight: 24,
  },
  icon: {
    marginBottom: 10,
  },
});
