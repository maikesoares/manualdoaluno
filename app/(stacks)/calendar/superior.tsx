import React from 'react';
import { View } from 'react-native';
import { CalendarAcademicoSuperior } from '~/src/components/calendar/calendarSuperior';

export default function CalendarEnsinoSuperiorScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', width: '100%' }}>
      <CalendarAcademicoSuperior />
    </View>
  );
}
