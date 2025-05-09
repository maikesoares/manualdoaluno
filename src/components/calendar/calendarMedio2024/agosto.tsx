import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaAzul } from "../../legendas/azul";
import { LegendaLaranja } from "../../legendas/laranja";
import { tintColorBackGround } from '~/src/constants/colors';

type EventPeriod = {
  startingDay?: boolean;
  endingDay: boolean;
  color: string;
}

type EventData = {
  periods: EventPeriod[];
}

type MonthData = {
  events: Record<string, EventData>;
  legends: string[];
  initialDate: string;
};

const monthData: Record<string, MonthData> = {
  '2024-08': {
      events: {
        '2024-08-10': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-08-17': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-08-24': { periods: [
          { endingDay: true, color: '#c0bd13' },
          { endingDay: true, color: '#159da7' },
        ] },
        '2024-08-26': { periods: [{ endingDay: true, color: '#159da7' }] },
        '2024-08-27': { periods: [{ endingDay: true, color: '#f3870c' }] },
        '2024-08-28': { periods: [{ endingDay: true, color: '#f3870c' }] },
        '2024-08-29': { periods: [{ endingDay: true, color: '#f3870c' }] },
        
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '02 – Data limite para envio do Relatório Individual de Trabalho – RIT do semestre/ano anterior',
        '02 – Data limite para envio do plano de ensino',
        '05 – Data limite para envio do Plano Individual de Trabalho – PIT referente ao 1º semestre de 2024',
        '10 – Sábado letivo referente a terça-feira',
        '17 – Sábado letivo referente a quarta-feira',
        '24 – Sábado letivo referente a quarta-feira',
        '24 – Fim do 1° Trimestre',
        '26 – Início do 2º Trimestre',
        '26 – Entrega dos resultados parciais referentes ao 1º trimestre',
        '27 a 29 – Recuperação parcial do 1º trimestre (extra-turno)',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-08-01'
    },
}

const CalendarAgosto: React.FC = () => {
  return (
    <View>
      {Object.keys(monthData).map((monthKey) => {
        const { events, legends, initialDate } = monthData[monthKey];

        return (
          <View key={monthKey} style={styles.container}>
            <Calendar
              hideExtraDays={true}
              hideArrows={true}
              initialDate={initialDate}
              markingType={'multi-period'}
              markedDates={events}
              theme={{
                calendarBackground: '#ffffff',
                textSectionTitleColor: '#000000',
                dayTextColor: '#2d4150',
                monthTextColor: '#000000',
                selectedDayBackgroundColor: '#00adf5',
                selectedDayTextColor: '#ffffff',
                arrowColor: 'black',
              }}
            />
            <View style={styles.eventosContainer}>
              {legends.map((legend:string, index:number) => (
                <Text style={styles.eventos} key={index}>
                  {legend}
                </Text>
              ))}

              <LegendaAmarela />
              <LegendaAzul />
              <LegendaLaranja />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarAgosto}

const styles = StyleSheet.create({

  container: {
    marginBottom: 20,
  },

  eventosContainer: {
    padding: 10,
    backgroundColor: tintColorBackGround,
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
  },

  eventos: {
    fontSize: 14,
    fontWeight: 'bold',
    borderBottomColor: 'red',
  },
});