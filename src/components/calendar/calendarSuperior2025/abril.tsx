import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';
import { LegendaVermelha } from '../../legendas/vermelho';
import { LegendaVerdeEscuro } from '../../legendas/verdeEscuro';
import { tintColorBackGround, tintColorBlack } from '~/src/constants/colors';

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
  '2025-04': {
    events: {
      '2025-04-01': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-02': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-03': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-04': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-05': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-06': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-07': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-08': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-09': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-10': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-11': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-12': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-13': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-14': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-15': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-16': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-17': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-18': {
        periods: [
          { endingDay: true, color: '#228B22' },
          { endingDay: true, color: '#ee2222' },
        ],
      },
      '2025-04-19': { periods: [{ endingDay: true, color: '#228B22' }] },
      '2025-04-21': { periods: [{ endingDay: true, color: '#ee2222' }] },
      // Adicione mais datas e eventos aqui
    },
    legends: [
      '01 a 19 – Férias 2024 (4º período - 19 dias)',
      '18 – Paixão de Cristo (Sexta-feira Santa)',
      '21 - Tiradentes',
      // Adicione mais itens de legenda aqui
    ],
    initialDate: '2025-04-01',
  },
};

const CalendarAbril: React.FC = () => {
  return (
    <View>
      {Object.keys(monthData).map((monthKey) => {
        const { events, legends, initialDate } = monthData[monthKey];

        return (
          <View key={monthKey}>
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

              <LegendaVermelha />
              <LegendaVerdeEscuro />
            </View>
          </View>
        );
      })}
    </View>
  );
};

export { CalendarAbril };

const styles = StyleSheet.create({
  eventosContainer: {
    marginBottom: 10,
    padding: 10,
    borderColor: tintColorBlack,
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
