import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
  ActivityIndicator,
} from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { doc, getDoc } from 'firebase/firestore';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenLight,
  tintColorWhite,
} from '~/src/constants/colors';
import db from '~/utils/firebase';

export default function ContatosScreen() {
  const [contato, setContato] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContato = async () => {
      try {
        const docRef = doc(db, 'informacoes', 'contato');
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setContato(docSnap.data());
        } else {
          setContato('Documento não encontrado.');
        }
      } catch (error) {
        console.error('Erro ao buscar dados:', error);
        setContato('Erro ao carregar dados.');
      } finally {
        setLoading(false);
      }
    };

    fetchContato();
  }, []);

  const handlePhonePress = () => {
    if (contato?.telefone) {
      Linking.openURL(`tel:${contato.telefone}`);
    }
  };

  const handleEmailPress = () => {
    if (contato?.email) {
      Linking.openURL(`mailto:${contato.email}`);
    }
  };

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={tintColorGreenLight} />
      </View>
    );
  }

  if (!contato) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Dados de contato não encontrados.</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Contatos</Text>

        <TouchableOpacity style={styles.infoContainer}>
          <MaterialCommunityIcons name="map-marker" size={24} color={tintColorGreenLight} />
          <Text style={styles.infoText}>{contato.endereco}</Text>
        </TouchableOpacity>

        <View style={styles.mapContainer}>
          <MapView
            style={styles.map}
            initialRegion={{
              latitude: parseFloat(contato.latitude) || -17.370524,
              longitude: parseFloat(contato.longitude) || -44.956433,
              latitudeDelta: 0.01,
              longitudeDelta: 0.01,
            }}>
            <Marker
              coordinate={{
                latitude: contato.latitude || -17.370524,
                longitude: contato.longitude || -44.956433,
              }}
              title="IFNMG - Campus Pirapora"
              description={contato.endereco}
            />
          </MapView>
        </View>

        <TouchableOpacity style={styles.infoContainer} onPress={handlePhonePress}>
          <MaterialCommunityIcons name="phone" size={24} color={tintColorGreenLight} />
          <Text style={styles.infoText}>{contato.telefone}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoContainer} onPress={handleEmailPress}>
          <MaterialCommunityIcons name="email" size={24} color={tintColorGreenLight} />
          <Text style={styles.infoText}>{contato.email}</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: tintColorBackGround,
    padding: 16,
  },
  card: {
    backgroundColor: tintColorWhite,
    borderRadius: 8,
    padding: 16,
    shadowColor: tintColorBlack,
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: tintColorGreenLight,
    textAlign: 'center',
    marginBottom: 16,
  },
  mapContainer: {
    height: 200,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  infoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  infoText: {
    fontSize: 16,
    marginLeft: 8,
    color: tintColorBlack,
    flex: 1,
  },
});
