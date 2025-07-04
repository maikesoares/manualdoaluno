import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { router } from 'expo-router';
import Icon from 'react-native-vector-icons/FontAwesome';
import { tintColorBlack, tintColorGreenDark, tintColorWhite } from '~/src/constants/colors';

const CalendarAcademico = () => {
  const backgroundImage = require('../../../assets/backGroundSecundario.png');

  const handleCalendarSuperior = () => {
    router.push('/(stacks)/calendar/superior');
  };

  const handleCalendarTecnico = () => {
    router.push('/(stacks)/calendar/tecnico');
  };

  const handleCalendarMedio = () => {
    router.push('/(stacks)/calendar/medio');
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
      <View style={styles.container}>
        <View style={styles.gridCalendar}>
          <Text style={styles.title}>CALENDÁRIO ACADÊMICO ANO LETIVO</Text>

          <TouchableOpacity style={styles.gridItem} onPress={handleCalendarSuperior}>
            <Icon name="calendar" size={24} color={tintColorWhite} />
            <Text style={styles.gridText}>Ensino Superior</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={handleCalendarTecnico}>
            <Icon name="calendar" size={24} color={tintColorWhite} />
            <Text style={styles.gridText}>Curso Técnico</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.gridItem} onPress={handleCalendarMedio}>
            <Icon name="calendar" size={24} color={tintColorWhite} />
            <Text style={styles.gridText}>Ensino Médio</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export { CalendarAcademico };

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    flex: 1,
    resizeMode: 'cover',
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },

  gridCalendar: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: tintColorWhite,
    borderRadius: 10,
    marginBottom: 20,
  },

  title: {
    marginBottom: 10,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center',
    color: tintColorBlack,
  },

  gridItem: {
    backgroundColor: tintColorGreenDark,
    borderRadius: 10,
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    minWidth: '100%',
    flexDirection: 'row',
    gap: 10,
  },

  gridText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: tintColorWhite,
  },
});
