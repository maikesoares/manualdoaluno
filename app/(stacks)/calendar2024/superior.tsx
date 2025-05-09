import React from 'react';
import { View } from 'react-native';
import { CalendarCursoSuperior2024 } from '~/src/components/calendarCursoSuperior2024';

export default function CalendarEnsinoSuperiorScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalendarCursoSuperior2024 />
    </View>
  );
}
