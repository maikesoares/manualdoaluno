import React, { useEffect, useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenDark,
  tintColorWhite,
  tintColorGreenLight,
} from '~/src/constants/colors';
import { doc, getDoc } from 'firebase/firestore';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useRouter } from 'expo-router';
import { auth, db } from '~/utils/firebase';

const Labs = () => {
  const [labs, setLabs] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const [user] = useAuthState(auth);

  useEffect(() => {
    const fetchLabs = async () => {
      try {
        const docRef = doc(db, 'recursos', 'laboratorios');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setLabs(docSnap.data());
        } else {
          setLabs({ subtitle: 'Documento não encontrado.' });
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setLabs({ subtitle: 'Erro ao carregar dados.' });
      } finally {
        setLoading(false);
      }
    };

    fetchLabs();
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color={tintColorGreenLight} />
      </View>
    );
  }

  const renderLabEquipment = (equipments: any[], labKey: string) => {
    return equipments.map((equip, index) => (
      <TouchableOpacity key={`${labKey}-${index}`} style={styles.tableRow} activeOpacity={0.6}>
        <View style={styles.tableIcon}>
          <MaterialCommunityIcons
            name={equip.icon || 'desktop-classic'}
            size={24}
            color="#228B22"
          />
        </View>
        <Text style={styles.tableText}>{equip.description}</Text>
      </TouchableOpacity>
    ));
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>{labs?.title || 'Laboratórios de Informática'}</Text>
        <Text style={styles.subtitle}>
          {labs?.subtitle || 'Carregando informações dos laboratórios...'}
        </Text>

        {labs?.labs &&
          Object.keys(labs.labs).map((labKey) => (
            <View key={labKey} style={styles.labContainer}>
              <Text style={styles.labTitle}>{labs.labs[labKey].title}</Text>
              <View style={styles.table}>
                {renderLabEquipment(labs.labs[labKey].equipments, labKey)}
              </View>
            </View>
          ))}

        {user && (
          <TouchableOpacity
            style={styles.editButton}
            onPress={() =>
              router.push({
                pathname: '/(stacks)/editarLabs',
                params: {
                  title: labs?.title,
                  subtitle: labs?.subtitle,
                  labs: JSON.stringify(labs?.labs || {}),
                },
              })
            }>
            <MaterialIcons name="edit" size={20} color={tintColorWhite} />
            <Text style={styles.editButtonText}>Editar</Text>
          </TouchableOpacity>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: tintColorBackGround,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: tintColorBackGround,
  },
  scrollContent: {
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '800',
    color: '#FFF',
    textAlign: 'center',
    marginBottom: 20,
    textShadowColor: '#000',
    textShadowOffset: { width: 2, height: 2 },
    textShadowRadius: 5,
    backgroundColor: tintColorGreenDark,
    borderRadius: 10,
    padding: 15,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
    color: '#FFF',
    marginBottom: 25,
    paddingHorizontal: 20,
    lineHeight: 28,
    backgroundColor: tintColorGreenDark,
    borderRadius: 8,
    padding: 15,
  },
  labContainer: {
    padding: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.95)',
    borderRadius: 15,
    marginBottom: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.5,
    shadowRadius: 6,
    elevation: 10,
    borderWidth: 1,
    borderColor: tintColorBlack,
  },
  labTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: tintColorBlack,
    marginBottom: 20,
    textShadowColor: tintColorBlack,
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 3,
    textAlign: 'center',
  },
  table: {
    flexDirection: 'column',
  },
  tableRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderBottomWidth: 1,
    borderColor: '#DDD',
    paddingBottom: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    padding: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  tableIcon: {
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tableText: {
    marginLeft: 15,
    fontSize: 16,
    color: '#333',
    flex: 1,
    fontWeight: '600',
  },
  editButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 24,
    backgroundColor: tintColorGreenLight,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  editButtonText: {
    color: tintColorWhite,
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
});

export default Labs;
