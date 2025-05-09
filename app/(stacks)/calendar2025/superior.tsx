import React from 'react'
import { View } from 'react-native'
import { CalendarCursoSuperior2025 } from '~/src/components/calendarCursoSuperior2025'


export default function CalendarEnsinoSuperiorScreen() {

  return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <CalendarCursoSuperior2025 />
    </View>
  )
};
