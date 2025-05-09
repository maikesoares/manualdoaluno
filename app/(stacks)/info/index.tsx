import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { tintColorBlack, tintColorGreenDark, tintColorWhite } from '~/src/constants/colors';

export default function InfoGeraisScreen() {
  const backgroundImage = require('~/assets/backGroundSecundario.png');

  const handleNavigateMissaoEVisao = () => {
    router.push('../(stacks)/info/missaoEVisao');
  };

  const handleNavigateHistoria = () => {
    router.push('../(stacks)/info/historia');
  };

  const handleNavigateContatos = () => {
    router.push('../(stacks)/info/contatos');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateMissaoEVisao}
          activeOpacity={0.7}
          accessibilityLabel="Missão e Visão da Instituição">
          <FontAwesome name="star" size={32} color={styles.icon.color} />
          <Text style={styles.gridText}>Missão e Visão da Instituição</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateHistoria}
          activeOpacity={0.7}
          accessibilityLabel="História da Instituição">
          <FontAwesome name="book" size={32} color={styles.icon.color} />
          <Text style={styles.gridText}>História da Instituição</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.gridItem}
          onPress={handleNavigateContatos}
          activeOpacity={0.7}
          accessibilityLabel="Contatos Principais">
          <FontAwesome name="phone" size={32} color={styles.icon.color} />
          <Text style={styles.gridText}>Contatos Principais</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  gridItem: {
    backgroundColor: tintColorWhite,
    borderRadius: 15,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
    width: '80%',
    shadowColor: tintColorBlack,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
    borderWidth: 1,
    borderColor: tintColorGreenDark,
  },

  gridText: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
    color: tintColorBlack,
  },

  icon: {
    color: tintColorGreenDark,
  },
});
