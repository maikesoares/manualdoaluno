import React from 'react'
import { View } from 'react-native'
import { CalendarCursoTecnico2025 } from '~/src/components/calendarCursoTecnico2025'


export default function CalendarEnsinoTecnicoScreen() {

  return (
    <View style={{flex:1, alignItems:'center', justifyContent: 'center'}}>
      <CalendarCursoTecnico2025 />
    </View>
  )
};
