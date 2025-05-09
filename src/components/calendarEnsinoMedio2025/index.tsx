import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import { CalendarFevereiro } from '../calendar/calendarMedio2025/fevereiro';
import { CalendarJaneiro } from '../calendar/calendarMedio2025/janeiro';
import { CalendarMarco } from '../calendar/calendarMedio2024/marco';
import { CalendarAbril } from '../calendar/calendarMedio2024/abril';
import { tintColorGreenDark } from '~/src/constants/colors';

const CalendarEnsinoMedio2025 = () => {
  return (
    <ScrollView style={styles.container}>
      <CalendarJaneiro />
      <CalendarFevereiro />
      <CalendarMarco />
      <CalendarAbril />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: tintColorGreenDark,
    padding: 10,
  },
});

export { CalendarEnsinoMedio2025 };
