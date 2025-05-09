import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LegendaAmarela } from '../../legendas/amarelo';
import { LegendaVermelha } from '../../legendas/vermelho';
import { LegendaRoxa } from '../../legendas/roxo';
import { LegendaVerdeEscuro } from '../../legendas/verdeEscuro';
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
  '2024-10': {
    events: {
      '2024-10-07': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-08': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-09': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-10': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-11': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-12': {
        periods: [
          { endingDay: true, color: '#228B22' },
          { endingDay: true, color: '#ee2222' },
        ],
      },
      '2024-10-13': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-14': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-15': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-16': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-17': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-18': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2024-10-25': { periods: [{ endingDay: true, color: '#7108b8' }] },
      '2024-10-26': {
        periods: [
          { endingDay: true, color: '#c0bd13' },
          { endingDay: true, color: '#7108b8' },
        ],
      },
      '2024-10-28': { periods: [{ endingDay: true, color: '#f38af7' }] },
      // Adicione mais datas e eventos aqui
    },
    legends: [
      '7 a 18 – Férias 2024 (2º período - 12 dias)',
      '12 - Nossa Senhora Aparecida - Padroeira do Brasil e Dia das Crianças',
      '25 e 26 – Semana Nacional de Ciência e Tecnologia',
      '26 – Sábado letivo referente a segunda-feira',
      '28 – Recesso (Dia do Servidor Público)',
      // Adicione mais itens de legenda aqui
    ],
    initialDate: '2024-10-01',
  },
};

const CalendarOutubro: React.FC = () => {
  return (
    <View>
      {Object.keys(monthData).map((monthKey) => {
        const { events, legends, initialDate } = monthData[monthKey];

        return (
          <View key={monthKey} style={styles.container}>
            <Calendar
              hideArrows={true}
              initialDate={initialDate}
              hideExtraDays={true}
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
              <LegendaVermelha />
              <LegendaRoxa />
              <LegendaVerdeEscuro />
              <LegendaRosa />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export { CalendarOutubro };

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
