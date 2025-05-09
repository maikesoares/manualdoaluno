import React from "react";
import { View, Text, StyleSheet} from "react-native";
import { Calendar } from "react-native-calendars";
import { LegendaVermelha } from "../../legendas/vermelho";
import { LegendaAmarela } from "../../legendas/amarelo";
import { LegendaRosa } from "../../legendas/rosa";
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
  '2024-05': {
      events: {
        '2024-05-04': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-05-11': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-05-18': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-05-25': { periods: [{ endingDay: true, color: '#c0bd13' }] },
        '2024-05-30': { periods: [{ endingDay: true, color: '#ee2222' }] },
        '2024-05-01': { periods: [{ endingDay: true, color: '#ee2222' }] },
        '2024-05-31': { periods: [{ endingDay: true, color: '#f38af7' }] },
        // Adicione mais datas e eventos aqui
      },
      legends: [
        '1 – Dia do trabalhador',
        '30 – Corpus Christi.',
        '31 – Recesso.',
        '1 a 31 - Greve',
        // Adicione mais itens de legenda aqui
      ],
      initialDate: '2024-05-01'
    },
}

const CalendarMaio: React.FC = () => {
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
              {legends.map((legend:string, index:number) => (
                <Text style={styles.eventos} key={index}>
                  {legend}
                </Text>
              ))}

              <LegendaVermelha />
              <LegendaAmarela />
              <LegendaRosa />
            </View>
          </View>
        );
    })}
    </View>
  )
}

export {CalendarMaio}

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