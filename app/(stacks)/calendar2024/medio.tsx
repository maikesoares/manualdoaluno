import React from 'react';
import { View } from 'react-native';
import { CalendarEnsinoMedio2024 } from '~/src/components/calendarEnsinoMedio2024';

export default function CalendarEnsinoMedioScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <CalendarEnsinoMedio2024 />
    </View>
  );
}
