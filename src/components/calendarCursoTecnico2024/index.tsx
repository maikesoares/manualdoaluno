import React from 'react';
import { ScrollView, StyleSheet } from 'react-native'
import { CalendarFevereiro } from '../calendar/calendarTecnico2024/fevereiro';
import { CalendarMarco } from '../calendar/calendarTecnico2024/marco';
import { CalendarAbril } from '../calendar/calendarTecnico2024/abril';
import { CalendarMaio } from '../calendar/calendarTecnico2024/maio';
import { CalendarJunho } from '../calendar/calendarTecnico2024/junho';
import { CalendarJulho } from '../calendar/calendarTecnico2024/julho';
import { CalendarAgosto } from '../calendar/calendarTecnico2024/agosto';
import { CalendarSetembro } from '../calendar/calendarTecnico2024/setembro';
import { CalendarOutubro } from '../calendar/calendarTecnico2024/outubro';
import { CalendarNovembro } from '../calendar/calendarTecnico2024/novembro';
import { CalendarDezembro } from '../calendar/calendarTecnico2024/dezembro';
import { tintColorGreenDark } from '~/src/constants/colors';

const CalendarCursoTecnico2024= () => {

  return (
    <ScrollView style={styles.container}>
      <CalendarFevereiro />
      <CalendarMarco />
      <CalendarAbril />
      <CalendarMaio />
      <CalendarJunho />
      <CalendarJulho />
      <CalendarAgosto />
      <CalendarSetembro />
      <CalendarOutubro />
      <CalendarNovembro />
      <CalendarDezembro />
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

export { CalendarCursoTecnico2024 }