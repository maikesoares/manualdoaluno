import React from 'react';
import { View } from 'react-native';
import { CalendarAcademicoTecnico } from '~/src/components/calendar/calendarTecnico';

export default function CalendarEnsinoMedioScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalendarAcademicoTecnico />
    </View>
  );
}
