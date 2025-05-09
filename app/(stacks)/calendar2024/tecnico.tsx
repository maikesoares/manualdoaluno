import React from 'react';
import { View } from 'react-native';
import { CalendarCursoTecnico2024 } from '~/src/components/calendarCursoTecnico2024';

export default function CalendarEnsinoTecnicoScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalendarCursoTecnico2024 />
    </View>
  );
}
