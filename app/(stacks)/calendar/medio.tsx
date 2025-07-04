import React from 'react';
import { View } from 'react-native';
import { CalendarAcademicoMedio } from '~/src/components/calendar/calendarMedio';

export default function CalendarEnsinoMedioScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalendarAcademicoMedio />
    </View>
  );
}
