import React from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import { CalendarFevereiro } from '../calendar/calendarTecnico2025/fevereiro';
import { CalendarMarco } from '../calendar/calendarTecnico2025/marco';
import { CalendarAbril } from '../calendar/calendarTecnico2025/abril';
import { CalendarJaneiro } from '../calendar/calendarTecnico2025/janeiro';
import { tintColorGreenDark } from '~/src/constants/colors';

const CalendarCursoTecnico2025= () => {

  return (
    <ScrollView style={styles.container}>
      <CalendarJaneiro />
      <CalendarFevereiro />
      <CalendarMarco />
      <CalendarAbril />
    </ScrollView>
  )
};

const styles = StyleSheet.create({

  container: {
    width: '100%',
    backgroundColor: tintColorGreenDark,
    padding: 10,
  },
});

export { CalendarCursoTecnico2025 }