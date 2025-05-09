import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LegendaAmarela } from '../../legendas/amarelo';
import { LegendaAzul } from '../../legendas/azul';
import { LegendaRoxa } from '../../legendas/roxo';
import { LegendaLaranja } from '../../legendas/laranja';
import { LegendaVermelha } from '../../legendas/vermelho';
import { LegendaRosa } from '../../legendas/rosa';
import { tintColorBackGround } from '~/src/constants/colors';

type EventPeriod = {
  startingDay?: boolean;
  endingDay: boolean;
  color: string;
};

type EventData = {
  periods: EventPeriod[];
};

type MonthData = {
  events: Record<string, EventData>;
  legends: string[];
  initialDate: string;
};

const monthData: Record<string, MonthData> = {
  '2024-12': {
    events: {
      '2024-12-01': { periods: [{ endingDay: true, color: '#7108b8' }] },
      '2024-12-02': { periods: [{ endingDay: true, color: '#7108b8' }] },
      '2024-12-03': { periods: [{ endingDay: true, color: '#7108b8' }] },
      '2024-12-04': { periods: [{ endingDay: true, color: '#7108b8' }] },
      '2024-12-05': { periods: [{ endingDay: true, color: '#7108b8' }] },
      '2024-12-06': { periods: [{ endingDay: true, color: '#7108b8' }] },
      '2024-12-07': {
        periods: [
          { endingDay: true, color: '#7108b8' },
          { endingDay: true, color: '#c0bd13' },
        ],
      },
      '2024-12-14': { periods: [{ endingDay: true, color: '#c0bd13' }] },
      '2024-12-18': { periods: [{ endingDay: true, color: '#f3870c' }] },
      '2024-12-19': { periods: [{ endingDay: true, color: '#f3870c' }] },
      '2024-12-20': { periods: [{ endingDay: true, color: '#f3870c' }] },
      '2024-12-21': {
        periods: [
          { endingDay: true, color: '#c0bd13' },
          { endingDay: true, color: '#159da7' },
        ],
      },
      '2024-12-23': { periods: [{ endingDay: true, color: '#f38af7' }] },
      '2024-12-24': { periods: [{ endingDay: true, color: '#f38af7' }] },
      '2024-12-25': { periods: [{ endingDay: true, color: '#ee2222' }] },
      '2024-12-26': { periods: [{ endingDay: true, color: '#f38af7' }] },
      '2024-12-27': { periods: [{ endingDay: true, color: '#f38af7' }] },
      '2024-12-30': { periods: [{ endingDay: true, color: '#f38af7' }] },
      '2024-12-31': { periods: [{ endingDay: true, color: '#f38af7' }] },
    },
    legends: [
      '1 a 7 - JIFENMG',
      '7 – Sábado letivo referente a sexta-feira',
      '12 – Dia letivo referente a quarta-feira',
      '14 – Sábado letivo referente a segunda-feira',
      '18 a 20 – Recuperação parcial referente à etapa 1 (extra-turno)',
      '21 – Sábado letivo referente a terça-feira',
      '21 – Fim da etapa 1',
      '21 – Data limite para entrega dos resultados parciais referentes à etapa 1',
      '23, 24, 26, 27, 30 e 31 - Recesso',
      '25 - Natal',
      // Adicione mais itens de legenda aqui
    ],
    initialDate: '2024-12-01',
  },
};

const CalendarDezembro: React.FC = () => {
  return (
    <View>
      {Object.keys(monthData).map((monthKey) => {
        const { events, legends, initialDate } = monthData[monthKey];

        return (
          <View key={monthKey} style={styles.container}>
            <Calendar
              hideArrows={true}
              hideExtraDays={true}
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
              {legends.map((legend: string, index: number) => (
                <Text style={styles.eventos} key={index}>
                  {legend}
                </Text>
              ))}

              <LegendaAmarela />
              <LegendaAzul />
              <LegendaRoxa />
              <LegendaLaranja />
              <LegendaVermelha />
              <LegendaRosa />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export { CalendarDezembro };

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
