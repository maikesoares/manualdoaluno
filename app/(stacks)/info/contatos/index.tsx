import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {
  tintColorBackGround,
  tintColorBlack,
  tintColorGreenLight,
  tintColorWhite,
} from '~/src/constants/colors';

export default function ContatosScreen() {
  const handlePhonePress = () => {
    Linking.openURL('tel:(38)3218-7373');
  };

  const handleEmailPress = () => {
    Linking.openURL('mailto:pirapora@ifnmg.edu.br');
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>Contatos</Text>

        <View style={styles.infoContainer}>
          <MaterialCommunityIcons name="map-marker" size={24} color={tintColorGreenLight} />
          <Text style={styles.infoText}>
            Rua Humberto Mallard, 1355 - Bairro Santos Dumont
            {'\n'}Cx. Postal 54 - Pirapora/MG - CEP: 39274-140
          </Text>
        </View>

        <TouchableOpacity style={styles.infoContainer} onPress={handlePhonePress}>
          <MaterialCommunityIcons name="phone" size={24} color={tintColorGreenLight} />
          <Text style={styles.infoText}>(38) 3218-7373</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.infoContainer} onPress={handleEmailPress}>
          <MaterialCommunityIcons name="email" size={24} color={tintColorGreenLight} />
          <Text style={styles.infoText}>pirapora@ifnmg.edu.br</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
